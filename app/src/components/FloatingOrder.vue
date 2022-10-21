<template>
  <footer>
    <div class="footer block p-2 mt-4 rounded-xl border-2 border-[#452101] bg-[#d7ee65] grid grid-cols-6" @click="onClickToGoToAllOrders">
      <img :src="image" height="50" width="50" class="left-0">

      <h6 class="text-black font-bold right-50"> {{order_quantity}} </h6>

      <div class="block border-3 border-white rounded-xl right-15" style="width:40px;height:40px;"
           v-bind:style="{'background-image': 'url(' + picture1 + ')'}">
      </div>

      <div class="block border-3 border-white rounded-xl right-10" style="width:40px;height:40px;"
           v-bind:style="{'background-image': 'url(' + picture2 + ')'}">
      </div>

      <div class="block border-3 border-white bg-gray-300 rounded-xl right-5" style="width:40px;height:40px;">
      </div>

      <h6 class="text-black font-bold text-right"> ฿{{order_price}} </h6>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      image: '@/assets/shoppingCart.svg',
      order_quantity: "5",
      picture1: 'https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSB1IF6ikXAJtDweXz91ROx3aJfaHu.jpg',
      picture2: 'https://s.isanook.com/wo/0/ud/36/180929/f.jpg',
      order_price: '240'
    };
  },
  props: {
    order: Object,
    url: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClickToGoToAllOrders() {
      if (this.url != '') {
        this.$router.push(this.url);
      }
    },
  }
};
</script>

<style>
.footer {
  width: 1200px;
  height: 60px;
  position: fixed;
  bottom:10px;
}
</style>