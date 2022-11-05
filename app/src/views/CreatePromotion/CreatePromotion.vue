<template>
  <div class="nav-menu">
    <div class="
          basis-1/4
          w-64
          absolute
          inset-y-0
          left-0
          md:relative md:-translate-x-0
          transform
          -translate-x-full
          transition
          duration-200
          ease-in-out
          "
          :class="this.showMobileMenu ? 'relative -translate-x-0' : 'closed-menu'"
          >
      <SectionHeader label="อร่อยโภชนา" />
      <NavItem
          v-for="(item, index) in navItems"
          :id="index"
          :label="item.label"
          :active="item.activeId"
          :url="item.router"
          :onClickItem="onClickItem"
          :key="index"
      >
        <span class="material-symbols-outlined">{{item.icon}}</span>
      </NavItem>
    </div>

    <div class="basis-3/4 ml-10">
      <div>
        <i>
          <button @click="showMenu()">
        <span class="material-symbols-outlined">
          menu
        </span>
          </button>
        </i>
      </div>
        <div class="flex justify-between">
        <h3 class="headline-large mb-10">เพิ่มโปรโมชัน</h3>
        <button
            class="w-8 h-8 secondary-container rounded-full p-1 justify-center"
            @click="backToPromotionList()"
        >
              <span class="material-symbols-outlined">
                arrow_back
              </span>
        </button>
        </div>


      <div class="main-content">
        <div class="basis-2/5 mb-8">
          <div v-if="previewImage">
            <div>
              <img class="preview my-3" :src="previewImage" alt="" />
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <label class="btn btn-default p-0">
                <input
                    type="file"
                    accept="image/*"
                    ref="file"
                    @change="selectImage"
                />
              </label>
            </div>
          </div>
          <div v-if="message" class="alert alert-secondary" role="alert">
            {{ message }}
          </div>
        </div>


        <div class="basis-3/5 ml-5">
          <h3 class="body-large">ชื่ออาหาร</h3>
          <input type="text" class="input-create-menu" v-model="food.food_name">
          <h3 class="body-large">ราคาโปรโมชัน</h3>
          <input type="text" class="input-create-menu" v-model="promotion.promotion_price">
          <h3 class="body-large">วันเริ่มโปรโมชัน</h3>
          <input type="text" class="input-create-menu" v-model="promotion.start_date">
          <h3 class="body-large">วันสิ้นสุดโปรโมชัน</h3>
          <input type="text" class="input-create-menu" v-model="promotion.end_date">
        </div>
      </div>
      <div class="grid justify-items-end mb-10">
        <button
            class="button-create-promotion body-large"
            :disabled="!currentImage"
            @click="saveNewPromotion()"
        >
          เพิ่มโปรโมชัน
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from '../../components/NavBarDrawer/SectionHeader.vue';
import NavItem from '../../components/NavBarDrawer/NavItem.vue';
import FoodCard from '../../components/FoodCard/FoodCard.vue';
import UploadService from '../../services/UploadFilesService.js';

export default {

  /*To Do List
*
* - Data -
* ต้องมีการเก็บค่าข้อมูลลง Food (เอาชื่ออาหารมาใช้ลิ้งกับข้อมูลโปรโมชันอะ) กับ Promotion
*
* - Method -
* saveNewPromotion()
* เป็นเมธอดที่ใช้กับ button ซึ่งพอกดแล้วจะต้องบันทึกข้อมูลที่กรอกมาไปเก็บไว้ที่ DB
* ทำการเซฟรูปภาพ (นี่ก้อปโค้ดเซฟรูปภาพในเน็ตมาแปะไว้ให้แล้วน่าจะใช้ได้เลย)
* และทำการลิ้งไปยังหน้ารายละเอียดโปรโมชันของข้อมูลที่เพิ่งกรอกเข้ามา
*
* */
  data() {
    return {
      showMobileMenu: false,
      currentImage: undefined,
      previewImage: undefined,

      progress: 0,
      message: '',

      imageInfos: [],

      selectedFile: null,
      navItems: [
        {label: 'ข้อมูลบัญชี', icon: 'account_circle', router: '/employee-account-list',activeId: 0,},
        {label: 'สรุปข้อมูล', icon: 'signal_cellular_alt', router: '/Dashboard' ,activeId: 0,},
        {label: 'รายการอาหาร', icon: 'restaurant_menu', router: '/MenuList',activeId: 0,},
        {label: 'โปรโมชัน', icon: 'grid_view', router: '/PromotionList',activeId: 1,},
      ],
      food: {
        food_name: '',
      },
      promotion: {
        promotion_price: '',
        start_date: '',
        end_date: '',
      },
    };
  },
  methods: {
    async saveNewPromotion() {
      try {
        // upload image file
        this.progress = 0;

        UploadService.upload(this.currentImage, (event) => {
          this.progress = Math.round((100 * event.loaded) / event.total);
        })
            .then((response) => {
              this.message = response.data.message;
              return UploadService.getFiles();
            })
            .then((images) => {
              this.imageInfos = images.data;
            })
            .catch((err) => {
              this.progress = 0;
              this.message = 'Could not upload the image! ' + err;
              this.currentImage = undefined;
            });
        // save new promotion
        this.error = null;
        const promotion_id = await this.promotion_store.add(this.promotion);
        if (promotion_id) {
          SocketioService.sendToServer('CreatePromotion', {success: true} );
          this.$router.push(`/${promotion_id}`);
        }
      } catch (error) {
        console.log(error);
        this.error = error.message;
      }
    },
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    backToPromotionList() {
      this.$router.push(`/PromotionList`);
    },
    onClickItem(id, url) {
      this.activeId = id;
      if (url != '') {
        this.$router.push(url);
      }
    },
    selectImage() {
      this.currentImage = this.$refs.file.files.item(0);
      this.previewImage = URL.createObjectURL(this.currentImage);
      this.progress = 0;
      this.message = '';
    },
  },
  mounted() {
    UploadService.getFiles().then((response) => {
      this.imageInfos= response.data;
    });
  },
  components: {
    SectionHeader,
    NavItem,
    FoodCard,
  },
};
</script>

<style lang="scss">
.input-create-menu[type=text]{
  width: 90%;
  border: 2px solid;
  border-color: var(--md-sys-color-primary-container);
  border-radius: 10px;
  background-color: var(--md-sys-color-surface);
  margin: 10px 0px 15px 10px;
  resize: none;
}
.textarea-create-menu {
  width: 90%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-color: var(--md-sys-color-primary-container);
  border-radius: 10px;
  background-color: var(--md-sys-color-surface);
  margin: 10px 0px 15px 10px;
  resize: none;
}
.button-create-promotion{
  background-color: var(--md-sys-color-tertiary-container);
  border: none;
  color: var(--md-sys-color-on-tertiary-container);
  text-decoration: none;
  padding: 16px 32px;
  margin: 4px 2px;
  border-radius: 10px;
  cursor: pointer;
}
.button-upload-file{
  background-color: var(--md-sys-color-primary-container);
  border: none;
  color: var(--md-sys-color-on-primary-container);
  text-decoration: none;
  padding: 10px 20px;
  margin: 4px 2px;
  border-radius: 10px;
  cursor: pointer;
}

.nav-menu {
  display: flex;
}
.nav-content {
  display: flex;
  flex-direction: column;
  width: 300px;
}
i {
  display: none;
}
div.main-content {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 768px) {
  .nav-menu {
    padding-top: 10px;
    position: absolute;
    width: 100%;
    //display: flex;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  i {
    display: block;
    text-align: left;
    padding: 0 10px 10px 0;
  }
  div.main-content {
    //display: flex;
    //flex-direction: column;
    display: inline;
  }
  .button-create-promotion{
    background-color: var(--md-sys-color-tertiary-container);
    border: none;
    color: var(--md-sys-color-on-tertiary-container);
    text-decoration: none;
    padding: 10px 20px;
    margin: 4px 2px;
    border-radius: 10px;
    cursor: pointer;
  }
  .button-upload-file{
    background-color: var(--md-sys-color-primary-container);
    border: none;
    color: var(--md-sys-color-on-primary-container);
    text-decoration: none;
    padding: 6px 12px;
    margin: 4px 2px;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>
