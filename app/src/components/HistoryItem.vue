<template>
    <div v-for="order in orders" :key="order.id"
            class= "mt-3 p-4
                color-block
                rounded
                botfrt-radius-8px
                flex
                justify-between">
        <div class="flex flex-col">
            <div class="text-black ">
                <span v-show="order.status == 'รอทำ'"
                    class="material-symbols-outlined">alarm</span>
                <span v-show="order.status == 'กำลังทำ'"
                    class="material-symbols-outlined">soup_kitchen</span>
                <span v-show="order.status == 'ส่งถึงโต๊ะแล้ว'"
                    class="material-symbols-outlined">done</span>
                {{order.status}}
            </div>
            <div class="mx-8">
                <div class="rounded border-radius-10px
                overflow-hidden flex flex-col" >
                    <img :src="order.image" alt="ข้าวมันไก่.jpg"
                    height="60" width="60">
                </div>
                <div class='text-black mx-5 flex flex-col'>
                    <span class='body-large'>{{order.foodName}}</span>
                    <span class='body-large'>{{order.foodPrice}} บาท</span>
                    <span class='label-medium'>x{{order.foodAmount}}</span>
                    <span class='body-large'>{{order.foodDescription}}</span>
                </div>
            </div>
       </div>

       <div class="items-center">
           <button v-show="order.status == 'รอทำ'"
           class="icon bg-orange-800 mt-10">
               <span class="material-symbols-outlined">close</span>
           </button>
           <button disabled v-show="order.status == 'กำลังทำ'"
           class="icon bg-slate-400 mt-10">
               <span class="material-symbols-outlined">close</span>
           </button>
       </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: 1,
          status: 'รอทำ',
          image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          foodName: 'ข้าวมันไก่',
          foodPrice: '45',
          foodAmount: 1,
          foodDescription: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          id: 2,
          status: 'กำลังทำ',
          image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          foodName: 'ข้าวมันไก่',
          foodPrice: '45',
          foodAmount: 1,
          foodDescription: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
        {
          id: 3,
          status: 'ส่งถึงโต๊ะแล้ว',
          image: 'https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg',
          foodName: 'ข้าวมันไก่',
          foodPrice: '45',
          foodAmount: 1,
          foodDescription: 'ขอหนังล้วน ๆ ไม่เอาเนื้อไก่',
        },
      ],
    };
  },
};
</script>

<style>
.color-block {
    padding: 30px;
    background: rgb(207, 212, 223);
}
.icon {
    padding:15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
