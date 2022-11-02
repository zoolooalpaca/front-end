<template>
<div class="relative">
    <div class="flex flex-row">
        <NavBarEmployee></NavBarEmployee>
        <div class="p-4 flex-grow">
            <h1 class="headline-medium">รับลูกค้าใหม่</h1>
            <h1 class="headline-small">Qr-code ให้กับลูกค้า</h1>
            
            <div>
                <div id="qr-code">

                </div>
                <p class="text-center headline-small">โต๊ะ {{table_number}}</p>
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
    }
}

</script>