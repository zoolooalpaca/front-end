<!-- eslint-disable max-len -->
<template>
 <div class='cooking-board'>
    <span class='body-large'>
      {{ tableNumber }}
    </span>
    <div>
        <p class="label-small">ที่ต้องทำ</p>
        <p class='headline-large'>{{ foodName }}</p>
    </div>
    <div>
        <p class="label-small">เพิ่มเติมจากลูกค้า</p>
        <p>{{ foodDescription }}</p>
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      tableNumber: 'โต๊ะ 1',
      foodName: 'ส้มตำไข่เค็ม',
      foodDescription: 'ส้มตำไข่เค็มอร่อยยั่ว ๆ ถูกปากคนไทย',
    };
  },
};
</script>

<style>
.cooking-board {
  display: flex;
  flex-direction: column;
  background:var(--md-sys-color-secondary-container);
  border-radius: 16px;
  padding: 16px;
  gap: 16px;
}

.cooking-board > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
