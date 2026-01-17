const { API_BASE } = require("./api.base");

export const ISSUE_LOG_API = {
  LIST: (issueId) => `${API_BASE}/issues/${issueId}/logs`,
};

module.export = ISSUE_LOG_API;
