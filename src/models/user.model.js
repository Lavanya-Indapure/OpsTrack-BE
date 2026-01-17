const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Department = require("./department.model");
const Role = require("./role.model");

const User = sequelize.define(
  "User",
  {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: DataTypes.STRING(100), allowNull: false },
    last_name: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: true },
    fk_role_id: { type: DataTypes.INTEGER },
    fk_department_id: { type: DataTypes.INTEGER },
    is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "users",
    timestamps: false,
  },
);

// Relations
User.belongsTo(Role, { foreignKey: "fk_role_id", as: "role" });
User.belongsTo(Department, {
  foreignKey: "fk_department_id",
  as: "department",
});

module.exports = User;
