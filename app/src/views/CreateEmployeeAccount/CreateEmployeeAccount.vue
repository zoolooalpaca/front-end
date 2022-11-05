<template>
  <div class="nav-menu-account">
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
      <h3 class="headline-small ml-4 mb6-4">ชื่อร้าน</h3>
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
        <h3 class="headline-large">สร้างบัญชี</h3>
        <button
        class="w-8 h-8 secondary-container rounded-full p-1 justify-center"
        @click="backToEmployeeAccountList()"
        >
        <span class="material-symbols-outlined">
                arrow_back
              </span>
        </button>
      </div>

      <div class="ml-10 mt-10">
        <div class="set-display-column-account ">
          <label class="set-margin text-xl">ชื่อ-นามสกุล</label>
          <input type="text" v-model="user.name" class="input-field-create-employee-account flex justify-center" placeholder="name">
        </div>

        <div class="set-display-column-account ">
          <label class="set-margin text-xl">ชื่อผู้ใช้</label>
          <input type="text" v-model="user.username" class="input-field-create-employee-account" placeholder="username">
        </div>

        <div class="set-display-column-account ">
          <label class="set-margin text-xl">อีเมล</label>
          <input type="text" v-model="user.email" class="input-field-create-employee-account" placeholder="email">
        </div>

        <div class="set-display-column-account ">
          <label class="set-margin text-xl">ตำแหน่ง</label>
          <input type="text" v-model="user.role" class="input-field-create-employee-account" placeholder="role">
        </div>

        <div class="flex justify-end mb-5">
          <button @click="createAnAccount" class="button-blue button-style">สร้างบัญชี</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import NavItem from "../../components/NavBarDrawer/NavItem.vue";
export default {
  /*To Do List
 *
 * - Data -
 * ต้องมีการดึงค่าข้อมูล Review มาแสดงในรายการอาหารที่แสดง
 *
 * - Method -
 *ไม่แน่ใจว่าต้องใช้ไรเพิ่มเติมอีกอะ แต่ในหน้าคือจะประกอบด้วย 3 ส่วน
 * ส่วน 1 Piechart ข้อมูล rating
 * ส่วน 2 แสดงข้อมูล reviews ทั้งหมด นี่ทำให้เป็น scollbar ไว้ให้แล้วแค่่ดึงดึงข้อมูลมาวน
 * ส่วน 3 ฺBar chart รายรับรายจ่ายในแต่ละวัน
 * */
  name: "App",
  data() {
    return {
      user: {
        name: '',
        username: '',
        role: '',
        email: '',
        password: '',
      },
      showMobileMenu: false,
      activeId: 0,
      loopCount: 4,
      navItems: [
        {label: 'ข้อมูลบัญชี', icon: 'account_circle', router: '/employee-account-list'},
        {label: 'สรุปข้อมูล', icon: 'signal_cellular_alt', router: '/Dashboard'},
        {label: 'รายการอาหาร', icon: 'restaurant_menu', router: '/MenuList'},
        {label: 'โปรโมชัน', icon: 'grid_view', router: '/PromotionList'},
      ],
    }
  },
  components: {
    NavItem,
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    createAnAccount() {

    },
    backToEmployeeAccountList(){
      this.$router.push(`/employee-account-list`);
    },
    onClickItem(id, url) {
      this.activeId = id;
      if (url != '') {
        this.$router.push(url);
      }
    },
  },
};
</script>

<style lang="scss">
.set-margin {
  margin-bottom: 10px;
  margin-top: 10px;
}

.set-display-column-account {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.button-blue {
  color: var(--md-sys-color-on-primary);
  background: var(--md-sys-color-primary);
  border-color: var(--md-sys-color-primary);
}

.button-style {
  margin-top: 8px;
  padding: 10px;
  border-radius: 9999px;
  justify-content: center;
}

.button-blue:hover {
  color: var(--md-sys-color-on-primary);
  background: #2371cd;
  border-color: #1A5EAFFF;
}

.input-field-create-employee-account[type=text] {
  width: 90%;
  color: var(--md-sys-color-on-primary-dark);
  border: 1px solid var(--md-sys-color-outline-light);
  border-radius: 15px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.borderColor {
  border: 1px solid var(--md-sys-color-outline-light);
  border-radius: 15px;
  align-items: center;
}

.button {
  border-radius: 10px;
}

.set-align {
  align-items: center;
}

.button:hover{
  color: var(--md-sys-color-on-primary);
  background: var(--md-sys-color-error);
  border-color: var(--md-sys-color-primary);
}

.nav-menu-account {
  display: flex;
  flex-direction: row;
}
.nav-content {
  display: flex;
  flex-direction: column;
  width: 300px;
}
i {
  display: none;
}
.main-content-account {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 768px) {
  .nav-menu-account {
    padding-top: 10px;
    position: absolute;
    width: 100%;
    display: flex;
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
  .main-content-account {
    display: flex;
    flex-direction: column;
  }
}
</style>
