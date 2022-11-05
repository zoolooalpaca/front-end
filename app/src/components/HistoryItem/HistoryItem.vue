<template>
    <div class= "mt-3 p-4
                color-block
                rounded
                flex gab-4
                justify-between">
        <div class="space-y-4">
            <div class="flex items-center text-black">
                <span v-show="status == 'รอทำ'"
                    class="material-symbols-outlined"
                  >alarm</span>
                <span v-show="status == 'กำลังทำ'"
                    class="material-symbols-outlined">soup_kitchen</span>
                <span v-show="status == 'ส่งถึงโต๊ะแล้ว'"
                    class="material-symbols-outlined">done</span>
                {{status}}
            </div>
            <div class="flex gap-4">
              <div
                  class="rounded border-radius-10px
                    overflow-hidden flex flex-col"
              >
                  <img :src="foodImage"
                      :alt="foodName"
                      height="60"
                      width="60"
                      style="object-fit: contain;"
                  >
                </div>
                <div class='text-black mx-5 flex flex-col'>
                    <p class='body-large'>{{foodName}}</p>
                    <p class='body-large'>{{foodPrice}} บาท</p>
                    <p class='label-medium'>x{{foodAmount}}</p>
                    <p class='body-large'>{{foodDescription}}</p>
                </div>
            </div>
       </div>

       <div class="flex items-center ">
           <button v-show="status == 'รอทำ'"
           @click="() => DeletePopup('buttonTrigger')"
           class="error-container error-text w-10 h-10 rounded-full"
           >
            <div class="flex items-center justify-center">
              <span class="material-symbols-outlined">close</span>
            </div>
           </button>
           <button disabled v-show="status == 'กำลังทำ'"
           class="on-surface-variant w-10 h-10 rounded-full">
            <div class="flex items-center justify-center">
             <span class="material-symbols-outlined">close</span>
            </div>
           </button>
       </div>

       <OrderConfirmDeletePopup
       v-if="popupTrigger.buttonTrigger"
       :DeletePopup="() => DeletePopup('buttonTrigger')"
       >
       <h1 class="text-center headline-medium">ยกเลิกอาหาร</h1>
       <article>
         <p>
           ยกเลิกอาหารที่สั่งไปแล้ว คุณจะไม่สามารถแก้ไขการยกเลิกนี้ได้
           <br/>กดปุ่มยกเลิกอาหารเพื่อยกเลิกการสั่งทำอาหาร
          </p>
        </article>
        <div>
          <button @click="deleteHistoryOrder"
          class="dbutton-color p-3 mt-5 border rounded-lg float-right">
              ยกเลิกอาหาร
            </button>
          </div>
        </OrderConfirmDeletePopup>
    </div>
</template>

<script>

import OrderConfirmDeletePopup from '../OrderConfirmDeletePopup.vue';
import {ref} from 'vue';


export default {
  props: [
    'id', 'status', 'foodImage', 'foodName',
    'foodPrice', 'foodAmount', 'foodDescription',
  ],

  // (DeletePopup ใน component OrderConfirmDeletePopup
  // = กดปุ่มแล้วแสดง popup ให้ confirm deleteOrder)
  setup() {
    const popupTrigger = ref({
      buttonTrigger: false,
    });
    const DeletePopup = (trigger) =>{
      popupTrigger.value[trigger] =!popupTrigger.value[trigger];
    };
    return {popupTrigger, DeletePopup};
  },

  methods: {
  //  กดปุ่ม'ยกเลิกอาหาร'เพื่อยืนยัน แล้วลบorderที่ได้สั่งไปแล้ว
  // (เฉพาะorder_status='รอทำ')
    deleteHistoryOrder() {

    },

  },
  components: {OrderConfirmDeletePopup},

};
</script>

<style>
.color-block {
    padding: 16px;
    color: var(--md-sys-color-on-surface);
    background: var(--md-sys-color-surface-variant);
}

</style>

