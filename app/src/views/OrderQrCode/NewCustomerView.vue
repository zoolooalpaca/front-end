<template>
<div class="relative">
    <div class="flex flex-row">
        <NavBarEmployee></NavBarEmployee>
        <div class="p-4 flex-grow">
            <h1 class="headline-medium">รับลูกค้าใหม่</h1>
            <h1 class="headline-small">เลือกโต๊ะ</h1>
            <div class="flex main-content-table-list mr-20 ">
                <div class="grid justify-items-center mt-8"
                    v-for="(table,index) in tables">
                    <TableItem 
                    :table_number="table.table_number"
                    :available="table.available"
                    :key="index"
                    >
                    </TableItem>
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
            },
            {
                table_number:7,
                available:false,
            },
            {
                table_number:8,
                available:true,
            },
            {
                table_number:9,
                available:false,
            },
            {
                table_number:10,
                available:true,
            },
            {
                table_number:11,
                available:true,
            },
            {
                table_number:12,
                available:true,
            },
            {
                table_number:13,
                available:true,
            },
            {
                table_number:14,
                available:true,
            },
            {
                table_number:15,
                available:true,
            },
        ]
    }
},
}
</script>

<style lang="scss">
div.main-content-table-list {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 6px;
  }
</style>