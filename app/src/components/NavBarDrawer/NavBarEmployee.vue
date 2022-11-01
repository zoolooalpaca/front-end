<template>
    <nav>
      <h3 class="headline-small ml-4 mb6-4">อร่อยโภชนา</h3>
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
          {label: 'รับลูกค้าใหม่', icon: 'sentiment_satisfied',router:''},
          {label: 'จ่ายเงิน', icon: 'payment',router:''},
          {label: 'อาหารที่ต้องเสิร์ฟ', icon: 'room_service',router:'/serve'},
          {label: 'อาหารที่ต้องทำ', icon: 'soup_kitchen',router:''},
        ],
      };
    },
    components: {Item, HeaderNav},
    methods: {
      onClickItem(id,url) {
        this.activeId = id;
        if (url != '') {
              this.$router.push(url)
            }
        },
      },
  };
  </script>
  
  <style>
  </style>
  