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
                    <img :src="image" alt="ข้าวมันไก่.jpg"
                    height="60" width="60">
                </div>
                <div class='text-black mx-5 flex flex-col'>
                    <span class='body-large'>{{foodName}}</span>
                    <span class='body-large'>{{foodPrice}} บาท</span>
                    <span class='label-medium'>x{{foodAmount}}</span>
                    <span class='body-large'>{{foodDescription}}</span>
                </div>
            </div>
       </div>

       <div class="items-center">
           <button v-show="status == 'รอทำ'"
           class="icon bg-orange-800 mt-10">
               <span class="material-symbols-outlined">close</span>
           </button>
           <button disabled v-show="status == 'กำลังทำ'"
           class="icon bg-slate-400 mt-10">
               <span class="material-symbols-outlined">close</span>
           </button>
       </div>
    </div>
</template>

<script>
export default {
  props: [
    'id', 'status', 'image', 'foodName',
    'foodPrice', 'foodAmount', 'foodDescription',
  ],
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
.button1{
    padding: 10px 24px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;   
}
</style>
