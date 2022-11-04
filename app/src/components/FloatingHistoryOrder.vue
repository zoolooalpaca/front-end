<template>
    <div id="history-bar" class="flex gap-2">
      <div class="floating-order-bar order-detail-bar">
        <label>รวม</label>
        <div class="order-detail">
          <span>{{totalOrder}} รายการ</span>
          <div class="flex ml-[14px]">
          <span>฿{{tprice}}</span>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  props: [
    'totalOrder', 'tprice',
  ],
  computed: {
  },
  methods: {

  },
};
</script>

  <style>
  .floating-order-bar {
    display: flex;
    align-content: center;
    padding: 8px;
    border: 1px solid var(--md-sys-color-secondary);
    color: var(--md-sys-color-on-tertiary-container);
    background: var(--md-sys-color-tertiary-container);
  }
  .order-detail-bar {
    flex: 1 1 0%;
    justify-content: space-between;
    border-radius: 16px;
  }
  .order-history-icon {
    border-radius: 50%;
  }
  .floating-order-bar > .order-detail {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  </style>
