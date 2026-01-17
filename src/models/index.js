const sequelize = require("../config/db");

const Department = require("./department.model");
const Role = require("./role.model");
const User = require("./user.model");
const Category = require("./category.model");
const Issue = require("./issue.model");
const IssueComment = require("./issue-comment.model");
const Approval = require("./approval.model");
const IssueAttachment = require("./issue-attachment.model");
const IssueLog = require("./issue-log.model");

module.exports = {
  sequelize,
  Department,
  Role,
  User,
  Category,
  Issue,
  IssueComment,
  Approval,
  IssueAttachment,
  IssueLog,
};
