import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://order-in.loca.lt/api',
});

export const employeeAPI = {
  async getAll() {
    const response = await axiosInstance.get('/employees');
    if (response.status === 200) {
      return response.data;
    }
    return [];
  },
  async saveNew(employee) {
    const response = await axiosInstance.post('/employees', employee);
    if (response.status === 201) {
      return response.data;
    }
    return {
      success: false,
    };
  },
};

export const orderApi = {
  async getAll() {
    const response = await axiosInstance.get('/orders');
    if (response.status === 200) {
      return response.data;
    }
    return [];
  },

  async saveNew(order) {
    const response = await axiosInstance.post('/orders', order);
    if (response.status === 201) {
      return response.data;
    }
    return {
      success: false,
    };
  },

  async update(order) {
    const response = await axiosInstance.put(
        `/orders/${order.order_number}`, order,
    );
    if (response.status === 200) {
      return response.data;
    }
    return {
      success: false,
    };
  },

  async get(orderNumber) {
    const response = await axiosInstance.get(
        `/orders/${orderNumber}`,
    );
    if (response.status === 200) {
      return response.data;
    }
    return {
      success: false,
    };
  },
};
