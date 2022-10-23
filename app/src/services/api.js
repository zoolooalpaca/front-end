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

export const promotionAPI = {
  async getAll() {
    const response = await axiosInstance.get('/promotions');
    if (response.status === 200) {
      return response.data;
    }
    return [];
  },

  async saveNew(promotion) {
    const response = await axiosInstance.post('/promotions', promotion);
    if (response.status === 201) {
      return response.data;
    }
    return {
      success: false,
    };
  },

  async delete(id) {
    const response = await axiosInstance.delete(`/promotions/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    return {
      success: false,
    };
  },

  async update(promotion) {
    const response = await axiosInstance.put(
        `/promotions/${promotion.id}`, promotion,
    );
    if (response.status === 200) {
      return response.data;
    }
    return {
      success: false,
    };
  },

  async get(id) {
    const response = await axiosInstance.get(`/promotions/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    return {
      success: false,
    };
  },
};

