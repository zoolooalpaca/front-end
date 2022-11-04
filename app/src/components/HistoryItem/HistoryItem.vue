<template>
    <div class= "color-block
                rounded flex gap-4
                justify-between">
        <div class="space-y-4">
            <div class="flex items-center">
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
                    <img :src="image"
                        :alt="foodName"
                        height="60"
                        width="60"
                    >
                </div>
                <div>
                    <p class='body-large'>{{foodName}}</p>
                    <p class='body-large'>{{foodPrice}} บาท</p>
                    <p class='label-medium'>x{{foodAmount}}</p>
                    <p class='body-large'>{{foodDescription}}</p>
                </div>
            </div>
       </div>

       <div class="items-center">
           <button v-show="status == 'รอทำ'"
           class="icon error on-error-text mt-10">
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
    padding: 16px;
    color: var(--md-sys-color-on-surface);
    background: var(--md-sys-color-surface-variant);
}
.icon {
    padding:15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
