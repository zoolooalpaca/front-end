<template lang=''>
    <div class='flex flex-row'>
        <div class="flex w-1/5">
            <NavBarDrawer></NavBarDrawer>
        </div>

        <div class='ml-10 w-full'>
            <span class='headline-medium'> ตอนนี้กำลงดำเนินการ </span>
            <div class="flex flex-col inset-0">
                  <CookingBoardDrawer/>
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


export default {
  components: {
    NavBarDrawer,
    CookingBoardDrawer,
  },
};

</script>

