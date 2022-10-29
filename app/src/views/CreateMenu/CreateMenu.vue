<template>
  <div class="flex flex-row">
    <div class="basis-1/4">
      <SectionHeader label="อร่อยโภชนา" />
      <NavItem
          v-for="(item, index) in navItems"
          :id="index"
          :label="item.label"
          :active="index == activeId"
          :url="item.router"
          :onClickItem="onClickItem"
          :key="index"
      >
        <span class="material-symbols-outlined">{{item.icon}}</span>
      </NavItem>
    </div>
    <div class="basis-3/4 ml-10">
      <div class="flex justify-between">
        <h3 class="headline-large mb-10">เพิ่มรายการอาหาร</h3>
            <button
                class="w-8 h-8 secondary-container rounded-full p-1 justify-center"
                @click="backToMenuList()"
            >
              <span class="material-symbols-outlined">
                arrow_back
              </span>
            </button>
        </div>

      <div class="flex flex-row">
        <div class="basis-2/5">
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
          <input type="text" class="input-create-menu">
          <h3 class="body-large">ประเภทอาหาร</h3>
          <input type="text" class="input-create-menu">
          <h3 class="body-large">ราคา</h3>
          <input type="text" class="input-create-menu">
          <h3 class="body-large">คำอธิบายอาหาร</h3>
          <textarea class="textarea-create-menu"></textarea>
          <h3 class="body-large">ข้อมูลสำหรับการแพ้อาหาร</h3>
          <textarea class="textarea-create-menu"></textarea>
        </div>
      </div>
      <div class="grid justify-items-end">
        <button
            class="button-create-menu body-large"
            :disabled="!currentImage"
            @click="upload"
        >
          เพิ่มรายการอาหาร
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../../components/NavBarDrawer/SectionHeader.vue";
import NavItem from "../../components/NavBarDrawer/NavItem.vue";
import FoodCard from "../../components/FoodCard/FoodCard.vue";
import UploadService from "../../services/UploadFilesService.js";

export default {
  data() {
    return {
      currentImage: undefined,
      previewImage: undefined,

      progress: 0,
      message: "",

      imageInfos: [],

      selectedFile: null,
      activeId: 0,
      navItems: [
        {label: 'ชื่อลูกค้า', icon: 'account_circle', router: ''},
        {label: 'สรุปข้อมูล', icon: 'signal_cellular_alt', router: '/Dashboard'},
        {label: 'รายการอาหาร', icon: 'restaurant_menu', router: '/MenuList'},
        {label: 'โปรโมชัน', icon: 'grid_view', router: '/PromotionList'},
      ],
    }
  },
  methods: {
    backToMenuList(){
      this.$router.push(`/MenuList`)
    },
    onClickItem(id,url) {
      this.activeId = id;
      if (url != '') {
        this.$router.push(url)
      }
    },
    selectImage() {
      this.currentImage = this.$refs.file.files.item(0);
      this.previewImage = URL.createObjectURL(this.currentImage);
      this.progress = 0;
      this.message = "";
    },
    upload() {
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
            this.message = "Could not upload the image! " + err;
            this.currentImage = undefined;
          });
    }
  },
  mounted() {
    UploadService.getFiles().then(response => {
      this.imageInfos= response.data;
    });
  },
  components: {
    SectionHeader,
    NavItem,
    FoodCard,
  }
}
</script>

<style>
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
.button-create-menu{
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
</style>