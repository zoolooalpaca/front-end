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

export const paymentAPI = {
  async getAll() {
    const response = await axiosInstance.get('/payments');
    if (response.status === 200) {
      return response.data;
    }
    return [];
  },
  async saveNew(payment) {
    const response = await axiosInstance.post('/payments', payment);
    if (response.status === 201) {
      return response.data;
    }
    return {
      success: false,
    };
  },
};
