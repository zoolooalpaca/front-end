<template lang=''>
    <div class='flex flex-row'>
        <div class="flex inset-y-100 left-0 w-50">
            <NavBarDrawer label='อร่อยโภชนา'></NavBarDrawer>
        </div>

        <div class='ml-10'>
            <span class='headline-medium'> อาหารที่รอดำเนินการ </span>
            <div class="flex flex-col">
                    <CookDrawer/>
            </div>
        </div>
    </div>
</template>


<script>

// eslint-disable-next-line no-unused-vars
import NavBarDrawer from '../components/NavBarDrawer/NavBarDrawer.vue';
// eslint-disable-next-line no-unused-vars
import CookDrawer from '../components/CookItem/CookDrawer.vue';


export default {
  components: {
    NavBarDrawer,
    CookDrawer,
  },

  methods: {
    onClickItem(id) {
      this.activeId = id;
        if (id == 1) 
    },
  },
};

</script>
