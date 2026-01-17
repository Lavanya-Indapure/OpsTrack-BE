const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Issue = require("./issue.model");
const User = require("./user.model");

const IssueLog = sequelize.define(
  "IssueLog",
  {
    log_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    issue_id: { type: DataTypes.INTEGER, allowNull: false },
    action_type: {
      type: DataTypes.ENUM(
        "CREATED",
        "ASSIGNED",
        "STATUS_CHANGED",
        "COMMENTED",
      ),
      allowNull: false,
    },
    old_value: { type: DataTypes.TEXT },
    new_value: { type: DataTypes.TEXT },
    performed_by: { type: DataTypes.INTEGER, allowNull: false },
    performed_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "issue_logs",
    timestamps: false,
  },
);

IssueLog.belongsTo(Issue, { foreignKey: "issue_id", as: "issue" });
IssueLog.belongsTo(User, { foreignKey: "performed_by", as: "user" });

module.exports = IssueLog;
