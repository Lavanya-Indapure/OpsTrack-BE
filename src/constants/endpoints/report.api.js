const { API_BASE } = require("./api.base");

export const REPORT_API = {
  ISSUE_SUMMARY: `${API_BASE}/reports/issues/summary`,
  SLA_BREACH: `${API_BASE}/reports/issues/sla-breach`,
  TEAM_PERFORMANCE: `${API_BASE}/reports/team-performance`,
};

module.export = REPORT_API;
