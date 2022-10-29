<!-- eslint-disable max-len -->
<!-- eslint-disable vue/valid-v-model -->
<template>
 <div class="cancel-block label-large">
    <span class="cancel-text label-large">ยกเลิกการทำอาหาร</span>
    <p class="reason-cancel-block">
        <input v-model="message" class="reason-cancel-block" placeholder="บอกลูกค้าถึงสาเหตุการยกเลิก"/>
    </p>
 </div>
</template>

<style>
.cancel-block {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: var( --md-sys-color-error-container);
    height: 284px;
    weight: 383px;

    /* outline */
    border-radius: 16px;
}

.cancel-text {
    padding-top: 25px;
    padding-left: 50px;
}

.reason-cancel-block {
    height: 250px;
    weight: 351px;

}

.reason-cancel-text {
    /* outline */
    border: 1px solid var(--md-sys-color-outline);
    border-radius: 16px;
}
</style>
