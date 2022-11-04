<template>
    <div class= "color-block
                rounded flex gap-4
                justify-between">
        <div class="space-y-4">
            <div class="flex items-center">
                <span v-show="order_status == 'รอทำ'"
                    class="material-symbols-outlined"
                  >alarm</span>
                <span v-show="order_status == 'กำลังทำ'"
                    class="material-symbols-outlined">soup_kitchen</span>
                <span v-show="order_status == 'ส่งถึงโต๊ะแล้ว'"
                    class="material-symbols-outlined">done</span>
                {{order_status}}
            </div>
            <div class="flex gap-4">
              <div 
                  class="rounded border-radius-10px
                    overflow-hidden flex flex-col" 
              >
                  <img :src="food_image"
                      :alt="foodName"
                      height="60"
                      width="60"
                  >
                </div>
                <div>
                    <p class='body-large'>{{food_name}}</p>
                    <p class='body-large'>{{order_price}} บาท</p>
                    <p class='label-medium'>x{{order_quantity}}</p>
                    <p class='body-large'>{{order_request}}</p>
                </div>
            </div>
       </div>

       <div class="flex items-center">
           <button v-show="order_status == 'รอทำ'"
           @click="() => DeletePopup('buttonTrigger')"
           class="error-container error-text w-10 h-10 rounded-full"
           >
            <div class="flex items-center justify-center">
              <span class="material-symbols-outlined">close</span>
            </div>
           </button>
           <button disabled v-show="order_status == 'กำลังทำ'"
           class="on-surface-variant w-10 h-10 rounded-full">
            <div class="flex items-center justify-center">
             <span class="material-symbols-outlined">close</span>
            </div>
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
          <button @click="deleteHistoryOrder"
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
    'id', 'order_status', 'food_image', 'food_name',
    'order_price', 'order_quantity', 'order_request',
  ],

//(DeletePopup ใน component OrderConfirmDeletePopup = กดปุ่มแล้วแสดง popup ให้ confirm deleteOrder)
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
  //กดปุ่ม'ยกเลิกอาหาร'เพื่อยืนยัน แล้วลบorderที่ได้สั่งไปแล้วแต่ยังอยู่ใน order_status 'รอทำ'
  deleteHistoryOrder(){

  }

},
components: { OrderConfirmDeletePopup, }

};
</script>

<style>
.color-block {
    padding: 16px;
    color: var(--md-sys-color-on-surface);
    background: var(--md-sys-color-surface-variant);
}

</style>
