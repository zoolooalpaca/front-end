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

export const foodAllergyAPI = {
  async getAll() {
    const response = await axiosInstance.get('/foodAllergies');
    if (response.status === 200) {
      return response.data;
    }
    return [];
  },

  async saveNew(foodAllergy) {
    const response = await axiosInstance.post('/foodAllergies', foodAllergy);
    if (response.status === 201) {
      return response.data;
    }
    return {
      success: false,
    };
  },
};

