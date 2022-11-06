import { defineStore } from "pinia";
import { orderApi } from "@/services/api";

export const useOrderStore = defineStore({
  id: "order",
  state: () => {
    return {
      orders: [],
      foodItemsInTray: JSON.parse(localStorage.getItem("fit")) || [],
    };
  },

  getters: {
    getOrders: (state) => state.orders,
  },
  actions: {
    addFoodToTray(food) {
      this.foodItemsInTray.push(food);
      localStorage.setItem("fit", JSON.stringify(this.foodItemsInTray));
    },
    removeFoodItemInTray(foodId) {
      console.log(foodId);
      this.foodItemsInTray = this.foodItemsInTray.filter((food) => food.id !== foodId);
      localStorage.setItem("fit", JSON.stringify(this.foodItemsInTray));
    },
    async placeOrderInTray() {
      const orderData = {
        order_items: this.foodItemsInTray.map(
          ({ food_id, order_quantity, order_request }) => {
            return order_request ? {food_id, order_quantity, order_request} : {food_id, order_quantity};
          }
        ),
      };
      const response = orderApi.placeNew(orderData);
      if (response.data?.success || response.success) {
        this.orders = await orderApi.getAll();
      }
    },
    async fetch() {
      const orderList = await orderApi.getAll();
      this.orders = orderList.data || orderList
      localStorage.removeItem('fit');
    },

    async save(order) {
      const response = await orderApi.saveNew(order);
      if (response.success) {
        this.orders.push(response);
        return response.id;
      }
      return false;
    },

    async update(order) {
      const response = await orderApi.update(order);
      if (response.success) {
        const index = this.orders.findIndex(
          (order) => order.id === response.id
        );
        this.orders[index] = response;
        return response.id;
      }
      return false;
    },

    async get(orderId) {
      const response = await orderApi.get(orderId);
      if (response.success) {
        return response;
      }
      return false;
    },

    delete(orderId) {
      this.orders = this.orders.filter((order) => order.id !== orderId);
    },
  },
});
