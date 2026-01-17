const pool = require("../config/db");
const { User, Department, Role } = require("../models");
const { success, error } = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email],
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating user" });
  }
};

// GET /users
exports.getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.findAll({
    include: [
      {
        model: Department,
        as: "department",
        attributes: ["department_id", "department_name"],
      },
      { model: Role, as: "role", attributes: ["role_id", "role_name"] },
    ],
    attributes: [
      "user_id",
      "first_name",
      "last_name",
      "email",
      "is_active",
      "created_at",
    ],
  });

  return success(res, users, "Users fetched successfully");
});
