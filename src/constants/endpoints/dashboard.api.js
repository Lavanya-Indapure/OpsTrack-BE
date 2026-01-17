const { API_BASE } = require("./api.base");

export const DASHBOARD_API = {
  EMPLOYEE: `${API_BASE}/dashboard/employee`,
  MANAGER: `${API_BASE}/dashboard/manager`,
  ADMIN: `${API_BASE}/dashboard/admin`,
};

module.export = DASHBOARD_API;
