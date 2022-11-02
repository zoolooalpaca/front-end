<template>
    <div class= "mt-3 p-4
                color-block
                rounded
                botfrt-radius-8px
                flex
                justify-between">
        <div class="flex flex-col">
            <div class="text-black ">
                <span v-show="status == 'รอทำ'"
                    class="material-symbols-outlined">alarm</span>
                <span v-show="status == 'กำลังทำ'"
                    class="material-symbols-outlined">soup_kitchen</span>
                <span v-show="status == 'ส่งถึงโต๊ะแล้ว'"
                    class="material-symbols-outlined">done</span>
                {{status}}
            </div>
            <div class="mx-8">
                <div class="rounded border-radius-10px
                overflow-hidden flex flex-col" >
                    <img :src="image"
                    height="60" width="60">
                </div>
                <div class='text-black mx-5 flex flex-col'>
                    <span class='headline-small'>{{food_name}}</span>
                    <span class='body-large'>{{food_price}} บาท</span>
                    <span class='body-small'>x{{order_quantity}}</span>
                    <span class='body-medium'>{{order_request}}</span>
                </div>
            </div>
       </div>

       <div class="items-center">
           <button v-show="status == 'รอทำ'"
           class="icon bg-orange-800 mt-10"
           @click="() => DeletePopup('buttonTrigger')"
           >
               <span class="material-symbols-outlined">close</span>
           </button>
           <button disabled v-show="status == 'กำลังทำ'"
           class="icon bg-slate-400 mt-10">
               <span class="material-symbols-outlined">close</span>
           </button>
       </div>
       <OrderConfirmDeletePopup
          v-if="popupTrigger.buttonTrigger" :DeletePopup="() => DeletePopup('buttonTrigger')"
          >
          <h1 class="text-center headline-medium">ยกเลิกอาหาร</h1>
          <article>
            <p>
              ยกเลิกอาหารที่สั่งไปแล้ว คุณจะไม่สามารถแก้ไขการยกเลิกนี้ได้ <br/>กดปุ่มยกเลิกอาหารเพื่อยกเลิกการสั่งทำอาหาร
            </p>
          </article>
          <div>
            <button @click="deleteOrder"
                    class="button-color p-3 mt-5 border rounded-lg float-right">
              ยกเลิกอาหาร
            </button>
          </div>
        </OrderConfirmDeletePopup>
    </div>
</template>

<script>

import OrderConfirmDeletePopup from '../OrderConfirmDeletePopup.vue';
import {ref} from 'vue';
import { trigger } from '@vue/reactivity';


export default {
  props: [
    'id', 'status', 'image', 'food_name',
    'food_price', 'order_quantity', 'order_request',
    'onClickPop'
  ],

setup(){
  const popupTrigger = ref({
    buttonTrigger: false
  })
  const DeletePopup = (trigger) =>{
    popupTrigger.value[trigger] =!popupTrigger.value[trigger]
  }
  return{popupTrigger,DeletePopup}
},

methods:{

},
components: { OrderConfirmDeletePopup, }

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
