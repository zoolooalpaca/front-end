<template>
    <div class="relative">
        <div class="flex flex-row">
            <NavBarEmployee></NavBarEmployee>
            <div class="p-4 flex-grow">
                <SectionHeader label="รายการอาหารที่ต้องเสิร์ฟ"></SectionHeader>
                <div class="py-4 text-right flex-col">
                    <label for="order_amount">{{orders}} รายการ</label>
                </div>
                    <div>
                        <ToServeItem></ToServeItem>
                        <ToServeDrawer></ToServeDrawer>
                    </div>
                </div>
            </div>
    </div>
    
</template>
    
<script>
    import SectionHeader from '../../components/NavBarDrawer/SectionHeader.vue';
    import ToServeItem from '../../components/ToServeItem/ToServeItem.vue';
    import ToServeDrawer from '../../components/ToServeItem/ToServeDrawer.vue';
    import NavBarEmployee from '../../components/NavBarDrawer/NavBarEmployee.vue';
    export default{
    components:{
    SectionHeader,
    ToServeItem,
    ToServeDrawer,
    NavBarEmployee
},
    methods: {
        
    },
}
</script>