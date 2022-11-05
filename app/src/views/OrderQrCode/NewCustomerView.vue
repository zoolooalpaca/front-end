<!-- /TODO:
  ใช้ข้อมูล
  table:
    - table_id
    - table_available = สถานะว่าโต๊ะนั้นว่างมั้ย
    - table_qrcode = qrcode ไปยังหน้าสั่งอาหารของtableนั้นๆ

  methods:
  อยู่ในcomponent
  -TableItem.vue > goToOrderQrCode() = กดเลือกโต๊ะที่ต้องการแล้วจะส่งไปยังหน้า
  OrderQrCodeView.vue (/new-customer/order-qrcode)

  navbar>
  -showMenu() = กดเพื่อให้โชว์navbarที่ซ่อนไว้
  อยู่ในcomponents
/ -->
<template>
<div class="relative">
    <div class="main-content-employee-view">
        <div>
            <h3 class="headline-large ml-4 mb6-4">อร่อยโภชนา</h3>
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
            :class="this.showMobileMenu
            ? 'relative -translate-x-0' : 'closed-menu'">
            <HeaderNav label="สำหรับพนักงาน" />
            <NavItem
              v-for="(item, index) in navItems"
                :id="index"
                :label="item.label"
                :active="index == activeId"
                :url="item.router"
                :onClickItem="onClickItem"
                :key="index">
              <span class="material-symbols-outlined">{{item.icon}}</span>
            </NavItem>
            </div>
            <i>
                <button @click="showMenu()">
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                </button>
            </i>
        </div>

        <div class="p-4 flex-grow">
            <h1 class="headline-medium">รับลูกค้าใหม่</h1>
            <h1 class="headline-small">เลือกโต๊ะ</h1>
            <div class="flex main-content-table-list mr-20 ">
                <div class="grid justify-items-center mt-8"
                    v-for="(table,index) in tables">
                    <TableItem
                    :table_id="table.table_id"
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
import NavItem from '@/components/NavBarDrawer/NavItem.vue';
import HeaderNav from '@/components/NavBarDrawer/SectionHeader.vue';
import TableItem from '../../components/Table/TableItem.vue';

export default {
  components: {
    NavItem,
    HeaderNav,
    TableItem,
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },

    onClickItem(id, url) {
      this.activeId = id;
      if (url != '') {
        this.$router.push(url);
      }
    },
  },


  data() {
    return {
      showMobileMenu: false,
      navItems: [
        {label: 'รับลูกค้าใหม่', icon: 'sentiment_satisfied', router: '/employee/new-customer',activeId:1},
        {label: 'จ่ายเงิน', icon: 'payment', router: '/employee/payment/create-promptpay',activeId:0},
        {label: 'อาหารที่ต้องเสิร์ฟ', icon: 'room_service', router: '/employee/order/serve',activeId:0},
        {label: 'อาหารที่ต้องทำ', icon: 'soup_kitchen', router: '/employee/order/order-to-do',activeId:0},
      ],

      tables: [
        {
          table_id: 1,
          available: true,
        },
        {
          table_id: 2,
          available: true,
        },
        {
          table_id: 3,
          available: false,
        },
        {
          table_id: 4,
          available: false,
        },
        {
          table_id: 5,
          available: true,
        },
        {
          table_id: 6,
          available: false,
        },
        {
          table_id: 7,
          available: false,
        },
        {
          table_id: 8,
          available: true,
        },
        {
          table_id: 9,
          available: false,
        },
        {
          table_id: 10,
          available: true,
        },
        {
          table_id: 11,
          available: true,
        },
        {
          table_id: 12,
          available: true,
        },
        {
          table_id: 13,
          available: true,
        },
        {
          table_id: 14,
          available: true,
        },
        {
          table_id: 15,
          available: true,
        },
      ],
    };
  },
};
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
