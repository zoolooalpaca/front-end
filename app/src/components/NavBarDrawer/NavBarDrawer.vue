<template>
  <nav>
    <HeaderNav />
    <Item
      v-for="(item, index) in navItems"
      :id="index"
      :label="item.label"
      :active="index == activeId"
      :onClickItem="onClickItem"
      :key="index"
    />
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
        { label: "item1" },
        { label: "item2" },
        { label: "item3" },
        { label: "item4" },
        { label: "item5" },
        { label: "item6" },
        { label: "item7" },
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