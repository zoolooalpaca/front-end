<template>
    <div class="relative">
        <div class="flex flex-row main-content-employee-view">
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
              <SectionHeader label="รายการอาหารที่ต้องเสิร์ฟ"></SectionHeader>
              <div class="py-4 text-right flex-col">
                  <label for="order_amount">{{totalOrders}} รายการ</label>
              </div>
              <div>
                  <ToServeItem
                      v-for="(table,index) in tables"
                      :id="index"
                      :status="table.status"
                      :table_id="table.table_id"
                      :orders="table.orders"
                      :key="index"
                  >
                  </ToServeItem>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
import SectionHeader from '../../components/NavBarDrawer/SectionHeader.vue';
import ToServeItem from '../../components/ToServeItem/ToServeItem.vue';
import NavBarEmployee from '../../components/NavBarDrawer/NavBarEmployee.vue';

export default {
  components: {
    SectionHeader,
    ToServeItem,
    NavBarEmployee,
  },

  computed: {
    totalOrders() {
      return this.tables.length;
    },
  },

  methods:{
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },

  data() {
    return {
      showMobileMenu: false,
      tables: [
        {
          table_id: 1,
          status: 'ยังไม่เสิร์ฟ',
          orders: [
            {
              order: 'ข้าวไข่เจียว',
              quantity: 2,
            },
            {
              order: 'กะเพราหมูไข่ดาว',
              quantity: 1,
            },
            {
              order: 'กะเพราหมูดาว',
              quantity: 1,
            },
          ],
        },
        {
          table_id: 2,
          status: 'ยังไม่เสิร์ฟ',
          orders: [
            {
              order: 'ไข่ดาว',
              quantity: 1,
            },
            {
              order: 'กะเพราดาว',
              quantity: 1,
            },
            {
              order: 'กะเพราหมูไข่',
              quantity: 1,
            },
          ],
        },
      ],
    };
  },
};
</script>
