<template>
  <nav>
    <HeaderNav label="ชื่อร้าน" />
    <Item
      v-for="(item, index) in navItems"
      :id="index"
      :label="item.label"
      :active="index == activeId"
      :onClickItem="onClickItem"
      :key="index"
    >
    <span class="material-symbols-outlined">{{item.icon}}</span>
  </Item>
  </nav>
</template>

<script>
import Item from "./Item.vue";
import HeaderNav from "./Header.vue";
export default {
  data() {
    return {
      activeId: 0,
      navItems: [
        { label: "รับลูกค้าใหม่", icon: 'sentiment_satisfied'},
        { label: "จ่ายเงิน", icon: 'payment' },
        { label: "อาหารที่ต้องเสิร์ฟ", icon: 'room_service' },
        { label: "อาหารที่ต้องทำ", icon: 'soup_kitchen' },
      ],
    };
  },
  components: { Item, HeaderNav },
  methods: {
    onClickItem(id) {
      this.activeId = id;
    },
  },
};
</script>

<style>
</style>