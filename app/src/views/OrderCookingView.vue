<template lang=''>
    <div class='flex flex-row'>
        <div class="flex w-1/5">
            <NavBarDrawer></NavBarDrawer>
        </div>

        <div class='ml-2 w-full'>
            <span class='headline-medium'> ตอนนี้กำลังดำเนินการ </span>
            <div class="flex flex-row space-x-4">
                  <CookingBoardDrawer></CookingBoardDrawer>
                  <div class='space-y-4'>
                    <ServeFoodButton/>
                    <Cancelcookingfood/>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import NavBarDrawer from '../components/NavBarDrawer/NavBarDrawer.vue';
// eslint-disable-next-line no-unused-vars
import CookingBoard from '../components/CookingBoard/CookingBoard.vue';
// eslint-disable-next-line max-len
import CookingBoardDrawer from '../components/CookingBoard/CookingBoardDrawer.vue';
// eslint-disable-next-line max-len
import Cancelcookingfood from '../components/CancelCookingFood/CancelCookingFood.vue';
import ServeFoodButton from '../components/ServeFoodButton/ServeFoodButton.vue';


export default {
  components: {
    NavBarDrawer,
    CookingBoardDrawer,
    Cancelcookingfood,
    ServeFoodButton,
  },
};
</script>

<style>
.order-size {
  width: 600px;
  height: 790px;
}
</style>

