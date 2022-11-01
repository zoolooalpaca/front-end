<!-- eslint-disable max-len -->
<template lang=''>
    <div class='flex flex-row'>
        <div class="flex w-1/5">
            <NavBarDrawer>
            </NavBarDrawer>
        </div>

        <div class='ml-10 w-full'>
            <span class='headline-medium'> อาหารที่รอดำเนินการ </span>
            <span class='body-large outline-text float-right'> {$CookDrawer.index} รายการ </span>
            <div class='flex flex-col max-w-[100%] space-y-4'>
                <CookDrawer>
                </CookDrawer>
            </div>
        </div>
    </div>
</template>


<script>

// eslint-disable-next-line no-unused-vars
import NavBarDrawer from '../components/NavBarDrawer/NavBarDrawer.vue';
import NavItem from '../components/NavBarDrawer/NavItem.vue';
// eslint-disable-next-line no-unused-vars
// import CookDrawer from '../components/CookItem/CookDrawer.vue';


export default {
  components: {
    NavBarDrawer,
    CookDrawer,
    // NavItem,
  },

  // methods: {
  //   onClickItem(id) {
  //     this.activeId = id;
  //       if (id == 1)
  //   },
  // },
};

</script>

<style>
</style>
