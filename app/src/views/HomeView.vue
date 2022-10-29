<!-- eslint-disable max-len -->
<script>
import FloatingOrder from '../components/FloatingOrder.vue';
import NavBarDrawer from '../components/NavBarDrawer/NavBarDrawer.vue';
import ToServeItem from '../components/ToServeItem.vue';
import BillOrderItem from '../components/BillOrderItem/BillOrderItem.vue';
import TableItem from '../components/Table/TableItem.vue';
import TopAppBar from '../components/TopAppBar/TopAppBar.vue';
import CookItem from '../components/CookItem/CookItem.vue';
import CookingBoard from '../components/CookingBoard/CookingBoard.vue';
import OrderItem from '../components/OrderItem/OrderItem.vue';
import HistoryDrawer from '../components/HistoryItem/HistoryDrawer.vue';
import BannerCard from '../components/BannerCard.vue';
import CancelCookingFood from '../components/CancelCookingFood/CancelCookingFood.vue';

export default {
  components: {
    TopAppBar,
    NavBarDrawer,
    BillOrderItem,
    TableItem,
    CookItem,
    OrderItem,
    CookingBoard,
    ToServeItem,
    HistoryDrawer,
    FloatingOrder,
    BannerCard,
    CancelCookingFood,
  },
};
</script>

<template>
  <div class="relative">
    <div class="fixed md:hidden left-0 bottom-0 w-full p-4">
      <FloatingOrder></FloatingOrder>
    </div>
    <TopAppBar/>
    <NavBarDrawer/>
    <CookItem/>
    <BillOrderItem/>
    <TableItem/>
    <OrderItem></OrderItem>
    <CookingBoard></CookingBoard>
    <p>TO Serve Item</p>
    <ToServeItem></ToServeItem>
    <p>History Item</p>
    <HistoryDrawer></HistoryDrawer>
    <p>Cancel Cooking Food </p>
    <CancelCookingFood></CancelCookingFood>

    <BannerCard></BannerCard>
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
