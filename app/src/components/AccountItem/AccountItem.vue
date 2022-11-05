<template>
  <div class="flex flex-row justify-between account-item-contain">
    <div class="ml-5">
    <span class="material-symbols-outlined">
    account_circle
    </span>
    </div>
    <div class="body-large">{{ name }}</div>
    <div class="body-large">{{ role }}</div>
    <button class="button-edit-account body-medium mr-5" @click="onClickItem(id,url)">EDIT</button>
  </div>
</template>

<script>
export default {
  props: ['id', 'name', 'role', 'url', 'onClickItem'],
};
</script>

<style scoped>
.account-item-contain{
  background-color: var(--md-sys-color-surface);
  border-radius: 20px;
  border: 2px solid;
  border-color: #8e9099;
  padding: 5px;
  margin: 5px 5px 5px 5px;
}
.button-edit-account{
  background-color: var(--md-sys-color-primary-container);
  border: none;
  color: var(--md-sys-color-on-primary-container);
  text-decoration: none;
  padding: 8px 8px;
  margin: 4px 2px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
