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
    methods:{
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    },
    

data() {
    return {
        showMobileMenu: false,
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
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 4px;
}

@media screen and (max-width: 768px) {
  div.main-content-table-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 4px;
  }
}
@media screen and (max-width: 650px) {
  div.main-content-table-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 4px;
  }
}
@media screen and (max-width: 420px) {
  div.main-content-table-list {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 4px;
  }
}


</style>