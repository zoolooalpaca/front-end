<!-- /TODO:
  ใช้ข้อมูล
  table:
    - table_id 
    - table_available
    - table_qrcode = qrcode ไปยังหน้า /menu ของtableนั้นๆ

  methods: 
  -onclickdone() = เปลี่ยน table_available ของโต๊ะที่เลือกเป็น false แล้วกลับไปหน้า /new-customer

  navbar>
  -showMenu() = กดเพื่อให้โชว์navbarที่ซ่อนไว้ 
  อยู่ในcomponents
  -NavBarEmployee.vue > onClickItem() = ส่งไปแต่ละหน้าตามurl
/ -->
<template>
<div class="relative">
    <div class="main-content-employee-view">
            <div class="
              w-64
              absolute
              inset-y-0
              left-0
              md:relative md:-translate-x-0
              transform
              -translate-x-full
              transition
              duration-200
              ease-in-out"
            :class="this.showMobileMenu ? 'relative -translate-x-0' : 'closed-menu'">
        <NavBarEmployee></NavBarEmployee>
        </div>
        <i>
            <button @click="showMenu()">
              <span class="material-symbols-outlined">
                menu
              </span>
            </button>
        </i>

        <div class="p-4 flex-grow">
            <h1 class="headline-medium">รับลูกค้าใหม่</h1>
            <h1 class="headline-small m-4">Qr-code ให้กับลูกค้า</h1>
            
            <div >
                <div style="margin-left: 15%; ">
                    <img :src="qrCode" class="border" style="display: ; width: 80%; object-fit: contain;">
                </div>
                <p class="text-center headline-small mt-8">โต๊ะ {{table_id}}</p>
                <div class="p-4 float-right">
                    <button  class="
                    text-center
                    button1
                    primary-container
                    "
                    @click="onclickdone"
                    >
                    <span class="material-symbols-outlined"> done </span>
                    เสร็จ
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import NavBarEmployee from '../../components/NavBarDrawer/NavBarEmployee.vue';

export default{
    components:{
    NavBarEmployee,
    },

    methods:{
      //เปลี่ยน table_available ของโต๊ะที่เลือกเป็น false แล้วกลับไปหน้า /new-customer
    onclickdone() {

      this.$router.push('/new-customer')
    },
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    },

    data(){
        return{
            table_number:'',
            qrCode: 'https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2Flocalhost%3A3000%2Fmenu&chs=180x180&choe=UTF-8&chld=L|2',
            showMobileMenu: false,
        }
    }
}
</script>

<style lang="scss">
div.main-content-employee-view {
  display: flex;
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
@media screen and (max-width: 768px) {
  .nav-menu {
    padding-top: 10px;
    position: absolute;
    width: 60%;
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
    text-align: right;
    padding: 0 10px 10px 0;
  }

  div.main-content-employee-view {
    display: inline;
  }
}
@media screen and (max-width: 650px) {
  div.main-content-employee-view {
    display: inline;
  }
}
@media screen and (max-width: 420px) {
  div.main-content-employee-view {
    display: inline;
  }
}

</style>