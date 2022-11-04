<template>
  <div :class="active ? 'item active' : 'item'" @click="onClickItem(id,url)">
    <span class="section-icon">
      <slot/>
    </span>
    <div>{{ label }}</div>
    <span class="section-tail-icon hidden">Tail</span>
  </div>
</template>

<script>
export default {
  props: ['id', 'label', 'active', 'url', 'onClickItem'],
};
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 48px;
  padding: 2px 16px;
  border-radius: 100px;
  color: var(--md-sys-color-on-background);
}
.item:hover {
  color: var(--md-sys-color-on-surface-variant);
  background: var(--md-sys-color-surface-variant);
}

.active {
  color: var(--md-sys-color-on-secondary-container);
  background: var(--md-sys-color-secondary-container);
}
.section-icon {
  margin-right: 16px;
}
.section-tail-icon {
  margin-left: auto;
}
</style>
