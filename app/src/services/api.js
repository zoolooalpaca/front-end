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

export const tableAPI = {
  async getAll() {
    const response = await axiosInstance.get('/tables');
    if (response.status === 200) {
      return response.data;
    }
    return [];
  },
  async saveNew(table) {
    const response = await axiosInstance.post('/tables', table);
    if (response.status === 201) {
      return response.data;
    }
    return {
      success: false,
    };
  },

  async update(table) {
    const response = await axiosInstance.put('/tables', table);
    if (response.status === 200) {
      return response.data;
    }
    return {
      success: false,
    };
  },

  async get(tableId) {
    const response = await axiosInstance.get(`/tables/${tableId}`);
    if (response.status === 200) {
      return response.data;
    }
    return {
      success: false,
    };
  },
};
