const { API_BASE } = require('./api.base');

const ISSUE_API = {
  CREATE: `${API_BASE}/issues`,
  LIST: `${API_BASE}/issues`,
  GET_BY_ID: (id) => `${API_BASE}/issues/${id}`,
  UPDATE: (id) => `${API_BASE}/issues/${id}`,
  ASSIGN: (id) => `${API_BASE}/issues/${id}/assign`,
  CHANGE_STATUS: (id) => `${API_BASE}/issues/${id}/status`,
};

module.exports = ISSUE_API;
