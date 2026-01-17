const { API_BASE } = require('./api.base');

const USER_API = {
  CREATE: `${API_BASE}/users`,
  LIST: `${API_BASE}/users`,
  GET_BY_ID: (id) => `${API_BASE}/users/${id}`,
  UPDATE: (id) => `${API_BASE}/users/${id}`,
  DEACTIVATE: (id) => `${API_BASE}/users/${id}/deactivate`,
};

module.exports = USER_API;
