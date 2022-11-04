<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable max-len -->
<template lang=''>
    <div class=''>
      <div>
        <h1 class='display-large justify-start text-center'>อร่อยโภชนา</h1>
      </div>

      <div class='scroller-recommend-menu'>
        <div class='flex gap-5'>
          <BannerCard/>
          <BannerCard/>
          <BannerCard/>
          <BannerCard/>
        </div>
      </div>

      <div class='flex justify-between'>
        <div class='left-menu-list'>
          <div id='select-category' class='category-main-size'>
            <div class='category-size'>
              <FoodCategoryChip/>
            </div>
            <div class='category-size'>
              <FoodCategoryChip/>
            </div>
            <div class='category-size'>
              <FoodCategoryChip/>
            </div>
            <div class='category-size'>
              <FoodCategoryChip/>
            </div>
          </div>

          <div id='select-food' class='scroller-food-card select-food-card grid grid-cols-2 gap-2'>
            <div class='select-food-card'>
              <FoodCard/>
            </div>
            <div class='select-food-card'>
              <FoodCard/>
            </div>
            <div class='select-food-card'>
              <FoodCard/>
            </div>
            <div class='select-food-card'>
              <FoodCard/>
            </div>
            <div class='select-food-card'>
              <FoodCard/>
            </div>
            <div class='select-food-card'>
              <FoodCard/>
            </div>
          </div>
        </div>

        <div id='right-menu-list' class='right-menu-list'>
          <div flex flex-row>
            <span class='title-large order-and-history' onclick="showOrderItem()">รายการในถาด</span>
            <span class='title-large order-and-history ml-2' onclick="showHistoryItem()">ประวัติ</span>
          </div>
            <div class='scroller-order-food space-y-4'>
              <OrderDrawer/>
            </div>
            <div class='flex justify-end'>
              <button class='send-button'>ส่ง</button>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import FoodCard from '../components/FoodCard/FoodCard.vue';
import BannerCard from '../components/BannerCard.vue';
// eslint-disable-next-line max-len
import FoodCategoryChip from '../components/FoodCategoryChip/FoodCategoryChip.vue';
import OrderDrawer from '../components/OrderItem/OrderDrawer.vue';

export default {
  components: {
    FoodCard,
    BannerCard,
    FoodCategoryChip,
    OrderDrawer,
  },
  showOrderItem() {
    ;
  },
  showHistoryItem() {

  },
  number: 1,
};
</script>

<style>

.head-recommend {
  display: flex;
  flex-direction: column;
}

.order-and-history {
  color:var( --md-ref-palette-neutral50);
}

.order-and-history:hover {
  color:var( --md-ref-palette-primary0);
}

.scroller-recommend-menu {
  width: auto;
  height: auto;
  overflow-x: scroll;
  margin-bottom: 10px;
}

.category-main-size {
  display: flex;
  flex-direction: row;
  width: 744px;
  height: 40px;
  gap: 15px;
}

.category-size {
  width: 150px;
  height: 10px;
  gap: 20px;
}

.left-menu-list {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 744px;
  height: 976px;
}

.select-food-card-size {
  width: 350px;
  height: 217px;
}

.select-food-card {
  margin-top: 50px;
  gap: 5px;
}

.scroller-food-card {
  width: auto;
  height: 500px;
  overflow-y: scroll;
  margin-bottom: 10px;
}

.scroller-order-food {
  width: auto;
  height: 450px;
  overflow-y: scroll;
  gap: 16px;
  margin-bottom: 10px;
}

.right-menu-list {
  width: 360px;
  height: 580px;
  margin-top: 20px;
  margin-right: 50px;

  border: 1px solid;
  padding: 16px 16px 16px 16px;
  border-radius: 8px;
  border-color: var( --md-sys-color-outline);
}

.send-button {
    justify-content: flex-end;
    width: 90px;
    height: 40px;
    background: var( --md-sys-color-primary);
    color: var( --md-sys-color-on-primary);

    /* outline */
    border-radius: 100px;
}

@media screen and (max-width: 768px) {
.scroller-recommend-menu {
  width: 500px;
  height: 100px;
  overflow-y: scroll;
}
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  i {
    display: block;
    text-align: left;
    padding: 0 10px 10px 0;

  }
  .main-content {
    display: flex;
    flex-direction: column;
  }
  .button-create-menu{
    background-color: var(--md-sys-color-tertiary-container);
    border: none;
    color: var(--md-sys-color-on-tertiary-container);
    text-decoration: none;
    padding: 10px 20px;
    margin: 4px 2px;
    border-radius: 10px;
    cursor: pointer;
  }
  .button-upload-file{
    background-color: var(--md-sys-color-primary-container);
    border: none;
    color: var(--md-sys-color-on-primary-container);
    text-decoration: none;
    padding: 6px 12px;
    margin: 4px 2px;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>

