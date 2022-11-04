<template>
<div class="dpopup">
  <div class="dpopup-inner border rounded-lg">
    <div class="text-center">
        <span class="material-symbols-outlined">
            mobile_friendly
        </span>
    </div>
    <slot/>
    <button @click="DeletePopup()"
            class="button p-3 mt-5 rounded-lg on-primary-text float-left">
        ยกเลิก
    </button>
  </div>
</div>
</template>

<script>

export default {
  setup() {

  },

  methods: {

  },
  props: ['DeletePopup'],
};


</script>

<style>
.dpopup {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--md-sys-color-background);

}
.dpopup-inner {
  background-color: var(--md-sys-color-on-surface);
  padding: 15px;
}
.dbutton-color {
  color: var(--md-sys-color-background);
  background: var(--md-sys-color-error);
  border-color: var(--md-sys-color-primary);
}
</style>
