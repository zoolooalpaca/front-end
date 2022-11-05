<template>
    <nav>
      <HeaderNav label="สำหรับพนักงาน" />
      <Item
        v-for="(item, index) in navItems"
            :id="index"
            :label="item.label"
            :active="index == activeId"
            :url="item.router"
            :onClickItem="onClickItem"
            :key="index"
        >
        <span class="material-symbols-outlined">{{item.icon}}</span>
    </Item>
    </nav>
  </template>

<script>
import Item from './NavItem.vue';
import HeaderNav from './SectionHeader.vue';
export default {
  data() {
    return {
      activeId: 0,
      navItems: [
        // eslint-disable-next-line max-len
        {label: 'รับลูกค้าใหม่', icon: 'sentiment_satisfied', router: '/employee/new-customer'},
        {label: 'จ่ายเงิน', icon: 'payment', router: ''},
        {label: 'อาหารที่ต้องเสิร์ฟ', icon: 'room_service', router: '/employee/order/serve'},
        {label: 'อาหารที่ต้องทำ', icon: 'soup_kitchen', router: '/employee/order/order-to-do'},
      ],
    };
  },
  components: {Item, HeaderNav},
  methods: {
    // onClickItem() = ส่งไปแต่ละหน้าตามurl
    onClickItem(id, url) {
      this.activeId = id;
      if (url != '') {
        this.$router.push(url);
      }
    },
  },
};
</script>

  <style>
  </style>

