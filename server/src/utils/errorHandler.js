

const errorHandler = (err, req, res, next) => {
  console.error(err.message || err); // Log error details for debugging

  const statusCode = err.statusCode || 500; // Default to 500 (Internal Server Error)
  const message = err.message || 'Something went wrong';

  // Respond with a JSON error message
  res.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorHandler;
