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

export const reviewAPI = {
  async getAll() {
    const response = await axiosInstance.get('/reviews');
    if (response.status === 200) {
      return response.data;
    }
    return [];
  },

  async saveNew(review) {
    const response = await axiosInstance.post('/reviews', review);
    if (response.status === 201) {
      return response.data;
    }
    return {
      success: false,
    };
  },

  async update(review) {
    const response = await axiosInstance.put('/reviews', review);
    if (response.status === 200) {
      return response.data;
    }
    return {
      success: false,
    };
  },

  async get(id) {
    const response = await axiosInstance.get(`/reviews/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    return {
      success: false,
    };
  },

  async delete(id) {
    const response = await axiosInstance.delete(`/reviews/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    return {
      success: false,
    };
  },
};
