const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Issue = require("./issue.model");
const User = require("./user.model");

const IssueAttachment = sequelize.define(
  "IssueAttachment",
  {
    attachment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    issue_id: { type: DataTypes.INTEGER, allowNull: false },
    file_name: { type: DataTypes.STRING(255), allowNull: false },
    file_url: { type: DataTypes.TEXT, allowNull: false },
    uploaded_by: { type: DataTypes.INTEGER, allowNull: false },
    uploaded_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "issue_attachments",
    timestamps: false,
  },
);

IssueAttachment.belongsTo(Issue, { foreignKey: "issue_id", as: "issue" });
IssueAttachment.belongsTo(User, { foreignKey: "uploaded_by", as: "user" });

module.exports = IssueAttachment;
