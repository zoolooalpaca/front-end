<template>
<div class="size-page">
  <h1 class="text-center text-xl">{{ nameShop }}</h1>
  <div>
    <span>โต๊ะ : </span>
    <span>{{ tableNumber }}</span>
  </div>

  <div>
    <span>วันที่ : </span>
    <span>{{ date }}</span>
  </div>

  <div>
    <span>รายการอาหาร</span>
  </div>

  <div v-for="order in orders" :key="order.id">
    <span>{{ order.amount }}</span>
    <span> {{ order.name }}</span>
    <span>{{ order.price }}</span>
  </div>

  <div>
    <span>(จำนวนรายการอาหารทั้งหมด : </span>
    <span>{{ totalOfOrder }})</span>
  </div>

  <div class="flex justify-end">
    <span>ยอดชำระสุทธิ : </span>
    <span>{{ totalBalance }}</span>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      nameShop : 'อร่อยโภชนา',
      tableNumber: '3',
      date: '2022/09/10 19:23:12',
      orders: null,
      totalOfOrder: '6',
      totalBalance: '385.00'
    }
  }
}
</script>

<style>
.size-page {
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
}
</style>