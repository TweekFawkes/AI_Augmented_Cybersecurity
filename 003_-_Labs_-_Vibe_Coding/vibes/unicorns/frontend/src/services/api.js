import axios from 'axios'

const API_BASE_URL = '/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const productAPI = {
  getAll: () => api.get('/products'),
  getById: (id) => api.get(`/products/${id}`),
  getByCategory: (category) => api.get(`/products/category/${category}`)
}

export const orderAPI = {
  create: (orderData) => api.post('/orders', orderData),
  getById: (id) => api.get(`/orders/${id}`)
}

export default api

