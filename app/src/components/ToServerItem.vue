<template>
    <div class="grid grid-cols-6 gap-4">
        <div class=" circle items-center text-center font-bold">
        {{table}}
        </div>
        <div class="col-start-2 col-end-7 color-block
        rounded botfrt-radius-8px flex justify-between">
          <div class="flex flex-col mx-5">
                <h3 class="text-black dark:text-white
                font-bold select-none">รายการอาหาร</h3>
                <span v-for="order in orders" :key="order.id"
                    class="text-black dark:text-white
                    font-medium select-none mx-5 flex flex-col">
                {{order.order}}   x {{order.amount}}
                </span>
          </div>

            <div class="items-center">
              <button class="icon bg-green-400 secondary-container
              justify-center mt-5">
                <span class="material-symbols-outlined error-text">
                    done
                </span>
              </button>
            </div>
         </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      table: 'โต๊ะ 1',
      orders: [
        {
          id: 1,
          order: 'ข้าวไข่เจียว',
          amount: 2,
        },
        {
          id: 2,
          order: 'กะเพราหมูไข่ดาว',
          amount: 1,
        },
      ],
    };
  },
};
</script>

<style>
.color-block {
    padding: 30px;
    background: gainsboro;
}
.circle {
  width: 150px;
  height: 150px;
  line-height: 50px;
  border-radius: 50%;
  font-size: 20px;
  color: rgb(0, 0, 0);
  text-align: center;
  vertical-align: baseline;
  line-height: 7.5;
  background: rgb(127, 155, 200)
}

.icon {
    float:right;
    padding:30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
