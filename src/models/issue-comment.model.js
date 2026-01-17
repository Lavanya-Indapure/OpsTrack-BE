const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Issue = require("./issue.model");
const User = require("./user.model");

const IssueComment = sequelize.define(
  "IssueComment",
  {
    comment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    issue_id: { type: DataTypes.INTEGER, allowNull: false },
    comment_text: { type: DataTypes.TEXT, allowNull: false },
    commented_by: { type: DataTypes.INTEGER, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "issue_comments",
    timestamps: false,
  },
);

IssueComment.belongsTo(Issue, { foreignKey: "issue_id", as: "issue" });
IssueComment.belongsTo(User, { foreignKey: "commented_by", as: "user" });

module.exports = IssueComment;
