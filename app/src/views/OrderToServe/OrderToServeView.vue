<!-- /TODO:
  ใช้ข้อมูล
  table:
  -table_id (โต๊ะที่สั่งorderนั้นๆ)

  order description(ที่สั่งแล้ว): 
  -order id
  -order_status = ดึงdataมาเฉพาะ status 'ยังไม่เสิร์ฟ'
  -food id > food name
  -quantity

  computed:
  totalOrder = จำนวนรายการorder เฉพาะที่ order_status ='ยังไม่เสิร์ฟ'

  methods: 
  อยู่ในcomponent
  -ToServeItem.vue > serveDone() = กดยืนยันว่าorderนั้นได้เสิร์ฟแล้ว แล้ว order_status เป็น 'ส่งถึงโต๊ะแล้ว' (orderนั้นจะหายไปจากlist toserve)

  navbar>
    -showMenu() = กดเพื่อให้โชว์navbarที่ซ่อนไว้
    อยู่ในcomponents
    -NavBarEmployee.vue > onClickItem() = ส่งไปแต่ละหน้าตามurl
  / -->
<template>
    <div class="relative">
        <div class="flex flex-row main-content-employee-view">
          <div>
            <h3 class="flex headline-large ml-4 mb6-4">อร่อยโภชนา</h3>
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
        </div>

          <div class="p-4 flex-grow">
              <SectionHeader label="รายการอาหารที่ต้องเสิร์ฟ"></SectionHeader>
              <div class="py-4 text-right flex-col">
                  <label for="order_amount">{{totalOrders}} รายการ</label>
              </div>
              <div>
                  <ToServeItem
                      v-for="(table,index) in tables"
                      :id="index"
                      :table_id="table.table_id"
                      :order_id="table.order_id"
                      :order_status="table.order_status"
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
    //โชว์navbar
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
          order_id:1,
          order_status: 'ยังไม่เสิร์ฟ',
          orders: [
            {
              food_name: 'ข้าวไข่เจียว',
              quantity: 2,
            },
            {
              food_name: 'กะเพราหมูไข่ดาว',
              quantity: 1,
            },
            {
              food_name: 'กะเพราหมูดาว',
              quantity: 1,
            },
          ],
        },
        {
          table_id: 2,
          order_id: 2,
          order_status: 'ยังไม่เสิร์ฟ',
          orders: [
            {
              food_name: 'ไข่ดาว',
              quantity: 1,
            },
            {
              food_name: 'กะเพราดาว',
              quantity: 1,
            },
            {
              food_name: 'กะเพราหมูไข่',
              quantity: 1,
            },
          ],
        },
      ],
    };
  },
};
</script>
