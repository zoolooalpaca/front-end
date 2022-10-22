<template>
  <footer>
    <div class="footer inline p-2 mt-4 rounded-xl border-2 border-[#452101] bg-[#d7ee65] grid grid-cols-6" @click="onClickToGoToAllOrders">
      <img :src="image" height="50" width="50" class="left-0">

      <h6 class="text-black font-bold mr-3"> {{order_quantity}} </h6>

      <div class="block border-3 border-white rounded-xl" style="width:40px;height:40px;"
           v-bind:style="{'background-image': 'url(' + picture1 + ')'}">
      </div>

      <div class="block border-3 border-white rounded-xl" style="width:40px;height:40px;"
           v-bind:style="{'background-image': 'url(' + picture2 + ')'}">
      </div>

      <div class="block border-3 border-white bg-gray-400 rounded-xl" style="width:40px;height:40px;">
      </div>

      <h6 class="text-black font-bold text-right mr-3"> ฿{{order_price}} </h6>
    </div>

    <div v-if="history"
    class="footer p-2 m-4 rounded-full border-2 border-[#452101] bg-[#d7ee65]">
      <img :src="image_history" height="50" width="50" class="right-0">
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      // image: ['@/assets/shoppingCart.svg', 'https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSB1IF6ikXAJtDweXz91ROx3aJfaHu.jpg', 'https://s.isanook.com/wo/0/ud/36/180929/f.jpg', '@/assets/history.svg']
      image: '@/assets/shoppingCart.svg',
      order_quantity: '5',
      picture1: 'https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSB1IF6ikXAJtDweXz91ROx3aJfaHu.jpg',
      picture2: 'https://s.isanook.com/wo/0/ud/36/180929/f.jpg',
      order_price: '240',
      image_history: '@/assets/history.svg',
      history: null,
    };
  },
  props: {
    order: Object,
    url: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClickToGoToAllOrders() {
      if (this.url != '') {
        this.$router.push(this.url);
      }
    },
    async orderHistory(food) {

    },
  },
};
</script>

<style>
.footer {
  display: inline;
  width: 1200px;
  height: 60px;
  position: fixed;
  bottom:10px;
}
</style>
