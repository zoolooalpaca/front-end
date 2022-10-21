<script>
import NavBarDrawer from '@/components/NavBarDrawer/NavBarDrawer.vue';
import CookItem from '@/components/CookItem/CookItem.vue';
import TableItem from '@/components/Table/TableItem.vue';

export default {
  components: {NavBarDrawer, TableItem, CookItem},
};
</script>

<template>
  <div>
    <NavBarDrawer></NavBarDrawer>
    <CookItem></CookItem>
    <TableItem></TableItem>
    <p class="surface-tint-text">surface-tint-text</p>
    <p class="surface-tint-color-text">surface-tint-color-text</p>
    <div class="error-container">
      <p class="on-error-container-text">on-error-container-text</p>
    </div>
    <div class="error">
      <p class="on-error-text">on-error-text</p>
    </div>
    <div class="tertiary-container">
      <p class="on-tertiary-container-text">on-tertiary-container-text</p>
    </div>
    <!-- tertiary -->
    <p class="tertiary-container-text">tertiary-container-text</p>
    <p class="tertiary-text">tertiary-text</p>
    <div class="inverse-surface">
      <p class="inverse-on-surface-text">inverse-on-surface-text</p>
    </div>
    <!-- secondary -->
    <div class="secondary-container">
      <p class="on-secondary-container-text">on-secondary-container-text</p>
    </div>
    <p class="secondary-container-text">secondary-container-text</p>
    <p class="secondary-text">secondary-text</p>
    <!-- primary -->
    <div class="primary-container">
      <p class="on-primary-container-text">on-primary-container-text</p>
    </div>
    <p class="primary-container-text">primary-container-text</p>
    <p class="primary-text">primary-text</p>
  </div>
</template>
