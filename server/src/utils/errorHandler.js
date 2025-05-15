const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';

  // Handle Mongoose validation errors 
  if (err.name === 'ValidationError') {
    statusCode = 400;
    const messages = Object.values(err.errors).map(val => val.message);
    message = messages.join(', ');
  }

  // Handle duplicate key errors (e.g., unique email)
  if (err.code && err.code === 11000) {
    statusCode = 409; // Conflict
    const field = Object.keys(err.keyValue);
    message = `Duplicate field value: ${field}. Please use another value.`;
  }

  // Handle cast errors (e.g., invalid ObjectId)
  if (err.name === 'CastError') {
    statusCode = 400;
    message = `Invalid ${err.path}: ${err.value}`;
  }

  // Return JSON error response
  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }), // Only include stack trace in dev
  });
};

export default errorHandler;
