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

export const foodAPI = {
  async getAll() {
    const response = await axiosInstance.get('/foods');
    if (response.status === 200) {
      return response.data;
    }
    return [];
  },
  async saveNew(food) {
    const response = await axiosInstance.post('/foods', food);
    if (response.status === 201) {
      return response.data;
    }
    return {
      success: false,
    };
  },

  async update(food) {
    const response = await axiosInstance.put(`/foods/${food.id}`, food);
    if (response.status === 200) {
      return response.data;
    }
    return {
      success: false,
    };
  },

  async get(id) {
    const response = await axiosInstance.get(`/foods/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    return {
      success: false,
    };
  },
};

