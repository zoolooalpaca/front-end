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

export const ratingAPI = {
  async getAll() {
    const response = await axiosInstance.get('/ratings');
    if (response.status === 200) {
      return response.data;
    }
    return [];
  },

  async saveNew(rating) {
    const response = await axiosInstance.post('/ratings', rating);
    if (response.status === 201) {
      return response.data;
    }
    return {
      success: false,
    };
  },

  async update(rating) {
    const response = await axiosInstance.put('/ratings', rating);
    if (response.status === 200) {
      return response.data;
    }
    return {
      success: false,
    };
  },

  async get(id) {
    const response = await axiosInstance.get(`/ratings/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    return {
      success: false,
    };
  },

  async delete(id) {
    const response = await axiosInstance.delete(`/ratings/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    return {
      success: false,
    };
  },
};
