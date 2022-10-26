<!-- eslint-disable max-len -->
<template>
 <div class='cookingBoard rounded border-radius-16'>
    <span class='body-large'>{{ tableNumber }}</span>
    <div class='flex'>
        <span class='label-small color-mustToDo'>ที่ต้องทำ</span>
        <span class='mt-6 text-left headline-large secondary-container'>{{ foodName }}</span>
    </div>

    <div>
        <span class='label-small color-mustToDo'>เพิ่มเติมจากลูกค้า</span>
        <span class='body-large'>{{foodDescription}}</span>
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
.cookingBoard {
    background:var(--md-sys-color-secondary-container);
    width: 297px;
    height: 311px;
    padding: 20px;
}
.color-mustToDo {
    color: var(--md-ref-palette-neutral40);
}
</style>
