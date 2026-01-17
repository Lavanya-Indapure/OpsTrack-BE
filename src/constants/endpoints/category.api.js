const { API_BASE } = require('./api.base');

const CATEGORY_API = {
  LIST: `${API_BASE}/categories`,
  CREATE: `${API_BASE}/categories`,
  UPDATE: (id) => `${API_BASE}/categories/${id}`,
};

module.exports = CATEGORY_API;
