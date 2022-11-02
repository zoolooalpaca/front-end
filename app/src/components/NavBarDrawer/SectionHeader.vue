
<template>
  <div class="nav-var-drawer-header">
    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: ['label'],
};
</script>

<style>
.nav-var-drawer-header {
  display: flex;
  padding: 2px 16px;
  align-items: center;
  height: 48px;
}
</style>
