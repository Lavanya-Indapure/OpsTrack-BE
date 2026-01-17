const { API_BASE } = require("./api.base");

export const APPROVAL_API = {
  REQUEST: (issueId) => `${API_BASE}/issues/${issueId}/approvals`,
  LIST: `${API_BASE}/approvals`,
  ACTION: (approvalId) => `${API_BASE}/approvals/${approvalId}`,
};

module.export = APPROVAL_API;
