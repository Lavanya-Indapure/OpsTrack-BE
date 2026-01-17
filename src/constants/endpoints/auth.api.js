const { API_BASE } = require('./api.base');

const AUTH_API = {
  LOGIN: `${API_BASE}/auth/login`,
  REGISTER: `${API_BASE}/auth/register`,
  ME: `${API_BASE}/auth/me`,
  LOGOUT: `${API_BASE}/auth/logout`,
};

module.exports = AUTH_API;
