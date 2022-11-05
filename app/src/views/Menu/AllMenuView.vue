<template lang=''>
    <div class=''>
      <div>
        <h1 class='display-large justify-start text-center'>อร่อยโภชนา</h1>
      </div>

      <div class="scroller-recommend-menu">
        <div class='flex gap-5'>
            <BannerCard
              v-for="(promotion, index) in promotions"
              :id="index"
              :image="promotion.image"
              :section="promotion.section"
              :key="index"
            >
            </BannerCard>
        </div>
      </div>

      <div class='flex justify-between'>
        <div class='left-menu-list'>
          <div id='select-category' class='category-main-size'>
            <div class='category-size'>
              <FoodCategoryChip
                 v-for="(chip, index) in chips"
                 :id="index"
                 :image="chip.image"
                 :name="chip.name"
                 :key="index"
              >
              </FoodCategoryChip>
            </div>
          </div>

          <div id='select-food' class='scroller-food-card select-food-card grid grid-cols-2 gap-2'>
               <FoodCard
                 v-for="(food, index) in foods"
                 :id="index"
                 :image="food.image"
                 :name="food.name"
                 :price="food.price"
                 :key="index"
              >
              </FoodCard>
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
import FoodCard from "../../components/FoodCard/FoodCard.vue";
import BannerCard from "../../components/BannerCard.vue";
import FoodCategoryChip from "../../components/FoodCategoryChip/FoodCategoryChip.vue";
import OrderDrawer from "../../components/OrderItem/OrderDrawer.vue";

export default {
  components: {
    FoodCard,
    BannerCard,
    FoodCategoryChip,
    OrderDrawer,
  },
  showOrderItem() {},
  showHistoryItem() {},
  data() {
    return {
      promotions: [
        {
          image: 'https://www.tripgether.com/wp-content/uploads/2022/03/Kruayupin_91.jpg',
          section: 'กุ้งเผายกถาด ฟรีโค้ก 1 ขวด',
        },
        {
          image: 'https://www.cpbrandsite.com/contents/recipe/h84kygu5qngpv0xdl3tqcomtbuqllzy0tsqqzuzv.jpg',
          section: 'สั่งขนมจีน แถมฟรีน้ำยา !',
        },
        {
          image: 'https://img.wongnai.com/p/1920x0/2018/06/18/2979c50de28b4137a3c0224591db4af5.jpg',
          section: 'ขนมหวาน แถมคนรู้ใจไปเดินข้างเคียง',
        },
        {
          image: 'https://www.easycookingmenu.com/media/k2/items/cache/4eadae682909e5571fe2c1a4fc6acd34_XL.jpg',
          section: 'เกี๊ยวกันมั้ย 100 บาท 6 ชิ้น',
        },
      ],

      chips: [
        {
          image: 'https://www.tripgether.com/wp-content/uploads/2022/03/Kruayupin_91.jpg',
          name: 'อาหารทะเล',
        },
      ],

      foods: [
        {
          image: 'https://img.wongnai.com/p/1920x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg',
          name: 'ข้าวมันไก่',
          price: 65,
        },
        {
          image: 'https://www.cpbrandsite.com/contents/recipe/h84kygu5qngpv0xdl3tqcomtbuqllzy0tsqqzuzv.jpg',
          name: 'ขนมจีน',
          price: 55,
        },
        {
          image: 'https://img.wongnai.com/p/1920x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg',
          name: 'ข้าวมันไก่',
          price: 65,
        },
        {
          image: 'https://www.cpbrandsite.com/contents/recipe/h84kygu5qngpv0xdl3tqcomtbuqllzy0tsqqzuzv.jpg',
          name: 'ขนมจีน',
          price: 55,
        },
        {
          image: 'https://www.cpbrandsite.com/contents/recipe/h84kygu5qngpv0xdl3tqcomtbuqllzy0tsqqzuzv.jpg',
          name: 'ขนมจีน',
          price: 55,
        },
        {
          image: 'https://img.wongnai.com/p/1920x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg',
          name: 'ข้าวมันไก่',
          price: 65,
        },
        {
          image: 'https://www.cpbrandsite.com/contents/recipe/h84kygu5qngpv0xdl3tqcomtbuqllzy0tsqqzuzv.jpg',
          name: 'ขนมจีน',
          price: 55,
        }
      ],
    };
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
  /*overscroll-behavior-x: none;*/
  /*overflow-x: auto;*/
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
  display: flex;
  flex-direction: row;
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 4px;
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

