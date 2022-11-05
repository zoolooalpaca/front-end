<!-- eslint-disable indent -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vue/valid-v-model -->
<template>
 <div class="cancel-block label-large">
    <span class="cancel-text label-large">ยกเลิกการทำอาหาร</span>
    <p class="reason-cancel-block">
        <textarea class='textarea-cancel' placeholder="บอกลูกค้าถึงสาเหตุการยกเลิก"/>
    </p>
    <p class="cancel-button-style">
        <button class="cancel-button">ยกเลิก</button>
    </p>
 </div>
</template>


<style>
.cancel-block {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: var( --md-sys-color-error-container);
    height: 300px;
    width: 400px;

    /* outline */
    border-radius: 16px;
}

.cancel-text {
    padding-top: 25px;
    padding-left: 30px;
}


.reason-cancel-text {
    /* outline */
    border: 1px solid var(--md-sys-color-outline);
    border-radius: 16px;
}

.reason-cancel-block {
    padding-left: 30px;
    /* outline */
    border-radius: 16px;
}

.cancel-button {
    width: 90px;
    height: 40px;
    background: var( --md-sys-color-error);
    color: var( --md-sys-color-on-primary);

    /* outline */
    border-radius: 100px;
}

.cancel-button-style {
    padding-left: 30px;
}

.textarea-cancel {
  width: 90%;
  height: 150px;
  padding: 12px 20px;
  border: 1px solid;
  border-color: var( --md-ref-palette-neutral-variant0);
  border-radius: 8px;
}

@media screen and (max-width: 768px) {
  .cancel-block {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: var( --md-sys-color-error-container);
    height: 200px;
    width: 300px;

    /* outline */
    border-radius: 16px;
  }

  .textarea-cancel {
    width: 200px;
    height: 70px;
    padding: 12px 20px;
    border: 1px solid;
    border-color: var( --md-ref-palette-neutral-variant0);
    border-radius: 8px;
  }
}
</style>
