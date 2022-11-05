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
                    <CancelCookingFood/>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBarDrawer from '../../components/NavBarDrawer/NavBarEmployee.vue';
import CookingBoardDrawer from '../../components/CookingBoard/CookingBoardDrawer.vue';
import CancelCookingFood from '../../components/CancelCookingFood/CancenCookingFood.vue';
import ServeFoodButton from '../../components/ServeFoodButton/ServeFoodButton.vue';


export default {
  components: {
    NavBarDrawer,
    CookingBoardDrawer,
    CancelCookingFood,
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

