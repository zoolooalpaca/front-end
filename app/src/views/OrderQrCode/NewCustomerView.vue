<template>
<div class="relative">
    <div class="flex flex-row">
        <NavBarEmployee></NavBarEmployee>
        <div class="p-4 flex-grow">
            <h1 class="headline-medium">รับลูกค้าใหม่</h1>
            <h1 class="headline-small">เลือกโต๊ะ</h1>
            <div class="flex">
                <div class="mt-8">
                <TableItem 
                v-for="(table,index) in tables"
                :table_number="table.table_number"
                :available="table.available"
                :key="index"
                ></TableItem>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import NavBarEmployee from '../../components/NavBarDrawer/NavBarEmployee.vue';
import TableItem from '../../components/Table/TableItem.vue';

export default{
    components:{
    NavBarEmployee,
    TableItem
    },


data() {
    return {
        tables:[
            {
                table_number:1,
                available:true,
            },
            {
                table_number:2,
                available:true,
            },
            {
                table_number:3,
                available:false,
            },
            {
                table_number:4,
                available:false,
            },
            {
                table_number:5,
                available:true,
            },
            {
                table_number:6,
                available:false,
            }
        ]
    }
},
}
</script>

<style>
</style>