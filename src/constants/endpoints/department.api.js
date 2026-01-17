const { API_BASE } = require("./api.base");

const DEPARTMENT_API = {
  LIST: `${API_BASE}/departments`,
  CREATE: `${API_BASE}/departments`,
  UPDATE: (id) => `${API_BASE}/departments/${id}`,
};

module.exports = DEPARTMENT_API;
