<template>
    <div class="relative">
        <div>
            <SectionHeader label="รายการอาหารที่ต้องเสิร์ฟ"></SectionHeader>
            <div>
                <label for="order_amount">{{orders}} รายการ</label>
            </div>
            <div>
                <ToServeItem></ToServeItem>
                <ToServeDrawer></ToServeDrawer>
            </div>
        </div>
    
    </div>
    
</template>
    
<script>
    import SectionHeader from '../../components/NavBarDrawer/SectionHeader.vue';
    import ToServeItem from '../../components/ToServeItem/ToServeItem.vue';
    import ToServeDrawer from '../../components/ToServeItem/ToServeDrawer.vue';
    export default{
        components:{
        SectionHeader,
        ToServeItem,
        ToServeDrawer
    },
}
</script>