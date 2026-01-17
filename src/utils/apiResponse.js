// Standard success response
const success = (res, data = {}, message = "Success", statusCode = 200) => {
  return res.status(statusCode).json({
    statusCode: statusCode,
    success: true,
    message,
    data,
  });
};

// Standard error response
const error = (
  res,
  message = "Something went wrong",
  statusCode = 500,
  errors = null,
) => {
  return res.status(statusCode).json({
    statusCode: statusCode,
    success: false,
    message,
    errors,
  });
};

module.exports = { success, error };
