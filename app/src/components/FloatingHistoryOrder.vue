<template>
    <div class="flex gap-2">
      <div class="floating-order-bar order-detail-bar">
        <label>รวม</label>
        <div class="order-detail">
          <span>{{totalItem}} รายการ</span>
          <div class="flex ml-[14px]">
          <span>฿{{totalPrice}} บาท</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // props:[
    //   'order_id','price'
    // ]
    data() {
      return {
        allorders:[
        {
            order_id: 1,
            price: 40,
          },
          {
            order_id: 2,
            price: 10,
          },
          {
            order_id: 3,
            price: 140,
          },
          {
            order_id: 4,
            price: 140,
          },
        ]
        
      };
    },
    props: {},
    computed: {
      totalItem() {
        return this.allorders.length;
      },
      totalPrice() {
        return this.allorders.reduce((prev, {price}) => prev + price, 0);
      },
    },
    methods: {
      onClickToGoToAllOrders() {
        if (this.url != '') {
          this.$router.push(this.url);
        }
      },
      async orderHistory(food) {
      },
    },
  };
  </script>
  
  <style>
  .floating-order-bar {
    display: flex;
    align-content: center;
    padding: 8px;
    border: 1px solid var(--md-sys-color-secondary);
    color: var(--md-sys-color-on-tertiary-container);
    background: var(--md-sys-color-tertiary-container);
  }
  .order-detail-bar {
    flex: 1 1 0%;
    justify-content: space-between;
    border-radius: 16px;
  }
  .order-history-icon {
    border-radius: 50%;
  }
  .floating-order-bar > .order-detail {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  </style>