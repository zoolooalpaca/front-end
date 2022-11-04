<template>
<div>
  <h1 class="text-center text-xl">{{ nameShop }}</h1>
  <span>{{ tableNumber }}</span>

  <div v-for="(item, index) in billOrderItem" :key="index">
    <BillOrderItem class="flex justify-center mb-2"
                   :id="index"
                   :image="item.image"
                   :name="item.name"
                   :active="index == activeId"/>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      nameShop: '',
      tableNumber: '',
      billOrderItem: [
        {amount: 2, name: 'ข้าวมันไก่', price: 60},
        {amount: 1, name: 'ข้าวอบ', price: 50},
        {amount: 1, name: 'ข้าวผัดกระเพรา', price: 55},
        {amount: 1, name: 'ข้าวผัดกุ้ง', price: 60},
        {amount: 1, name: 'สเต๊กเนื้อ', price: 100},
      ],
    };
  },
};
</script>

<style>

</style>
