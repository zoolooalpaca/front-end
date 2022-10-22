import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://zoolooalpaca-api.loca.lt/api',
});

export const employeeAPI = {
  async getAll() {
    const response = await axiosInstance.get('/employees');
    if (response.status === 200) {
      return response.data.data;
    }
    return [];
  },
  async saveNew(employee) {
    const response = await axiosInstance.post('/employees', employee);
    if (response.status === 201) {
      return response.data.data;
    }
    return {
      success: false,
    };
  }
};
