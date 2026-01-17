const { API_BASE } = require("./api.base");

export const ISSUE_ATTACHMENT_API = {
  UPLOAD: (issueId) => `${API_BASE}/issues/${issueId}/attachments`,
  LIST: (issueId) => `${API_BASE}/issues/${issueId}/attachments`,
  DELETE: (attachmentId) => `${API_BASE}/attachments/${attachmentId}`,
};

module.exports = ISSUE_ATTACHMENT_API;
