const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Issue = require("./issue.model");
const User = require("./user.model");

const Approval = sequelize.define(
  "Approval",
  {
    approval_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    issue_id: { type: DataTypes.INTEGER, allowNull: false },
    requested_by: { type: DataTypes.INTEGER, allowNull: false },
    approved_by: { type: DataTypes.INTEGER },
    status: {
      type: DataTypes.ENUM("PENDING", "APPROVED", "REJECTED"),
      defaultValue: "PENDING",
    },
    requested_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    actioned_at: { type: DataTypes.DATE },
  },
  {
    tableName: "approvals",
    timestamps: false,
  },
);

Approval.belongsTo(Issue, { foreignKey: "issue_id", as: "issue" });
Approval.belongsTo(User, { foreignKey: "requested_by", as: "requester" });
Approval.belongsTo(User, { foreignKey: "approved_by", as: "approver" });

module.exports = Approval;
