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
            
            <div>
                <div>
                    <img :src="qrCode" class="border" style="display: ; width: 100%; object-fit: contain;">
                </div>
                <p class="text-center headline-small mt-8">โต๊ะ {{table_number}}</p>
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
    onclickdone () {
      this.$router.push('/new-customer')
    },
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    },

    data(){
        return{
            table_number:'',
            qrCode: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
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