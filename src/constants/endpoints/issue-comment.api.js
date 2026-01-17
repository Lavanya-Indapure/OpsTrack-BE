const { API_BASE } = require('./api.base');

const ISSUE_COMMENT_API = {
  LIST: (issueId) => `${API_BASE}/issues/${issueId}/comments`,
  ADD: (issueId) => `${API_BASE}/issues/${issueId}/comments`,
};

module.exports = ISSUE_COMMENT_API;
