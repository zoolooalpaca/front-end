<template lang=''>
    <div class="w-full">
      <div>
        <h1 class='display-large justify-start text-center'>อร่อยโภชนา</h1>
      </div>

      <div>
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

      <div class="flex relative">
            <div>
              <FoodCategoryChip
                 v-for="(chip, index) in chips"
                 :id="index"
                 :image="chip.image"
                 :name="chip.name"
                 :key="index"
              >
              </FoodCategoryChip>
            </div>

      <div class='main-menu'>
        <div class='left-menu-list'>
            <div class='category-main-size'>
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

          <div id='select-food' class='scroller-food-card select-food-card'>
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

          <div class="flex justify-between w-full gap-4">
            <div class="grid grid-cols-2 gap-2 md:w-1/2 lg:w-2/3">
              <FoodCard
                v-for="(food, index) in foods"
                :id="index"
                :image="food.images.thumb"
                :name="food.food_name"
                :price="food.food_price"
                :key="index"
              />
            </div>
            <div
              class="w-1/2 lg:w-1/3 hidden md:block
              h-screen overflow-hidden sticky top-0"
            >
              <FoodTray/>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import FoodCard from '../../components/FoodCard/FoodCard.vue';
import BannerCard from '../../components/BannerCard.vue';
import FoodTray from
  '../../components/FoodTray.vue';
import FoodCategoryChip from
  '../../components/FoodCategoryChip/FoodCategoryChip.vue';
import {useFoodStore} from '../../stores/food';

export default {
  setup() {
    const foodStore = useFoodStore();
    return {foodStore};
  },

  created() {
    this.fetchOrder();
  },

  components: {
    FoodCard,
    BannerCard,
    FoodCategoryChip,
    FoodTray,
  },
  data() {
    return {
      promotions: [
        {
          image: 'https://www.tripgether.com/wp-content/uploads/2022/03/Kruayupin_91.jpg',
          section: 'กุ้งเผายกถาด ฟรีโค้ก 1 ขวด',
        },
        {
          image: 'https://www.eatandsleep.blog/wp-content/uploads/2021/04/%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%88%E0%B8%B5%E0%B8%99%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A2%E0%B8%B2-43-1.jpg',
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
          image: 'https://img.wongnai.com/p/1920x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg',
          name: 'ข้าวมันไก่ทอด',
          price: 65,
        },
        {
          image: 'https://img.wongnai.com/p/1920x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg',
          name: 'ข้าวมันไก่ ไม่มีหนัง',
          price: 65,
        },
        {
          image: 'https://img.wongnai.com/p/1920x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg',
          name: 'ข้าวมันไก่ ไร้ไก่',
          price: 65,
        },
        {
          image: 'https://img.wongnai.com/p/1920x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg',
          name: 'ข้าวมันไก่ เครื่องใน',
          price: 65,
        },
        {
          image: 'https://img.wongnai.com/p/1920x0/2017/06/22/bbf899f7ab4341dea4aec6330c2afafd.jpg',
          name: 'ข้าวมันไก่',
          price: 65,
        },
      ],
    };
  },
  methods: {
    async fetchOrder() {
      await this.foodStore.fetch();
      this.foods = this.foodStore.foods.data;
    },
  },
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
  display: grid;
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

.main-menu {
  display: flex;
  justify-content: space-between;
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

@media screen and (max-width: 420px) {
  .scroller-recommend-menu {
    width: 100px;
    height: 100px;
    /*overscroll-behavior-x: none;*/
    /*overflow-x: auto;*/
    overflow-y: scroll;
    margin-bottom: 10px;
  }

  .main-menu {
    display: flex;
    flex-direction: column;
  }

  .right-menu-list {
    width: 300px;
    height: 300px;

    border: 1px solid;
    padding: 16px 16px 16px 16px;
    border-radius: 8px;
    border-color: var( --md-sys-color-outline);
  }

  .select-food-card {
    display: grid;
    margin-top: 50px;
    gap: 5px;

    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 4px;
  }

  .scroller-order-food {
    width: 250px;
    height: 150px;
    overflow-y: scroll;
    gap: 16px;
    margin-bottom: 10px;
  }
}
</style>

