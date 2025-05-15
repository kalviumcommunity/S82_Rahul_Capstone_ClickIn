import jwt from 'jsonwebtoken';


export const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Store user info in request
    next(); // Pass control to the next middleware/route handler
  } catch (err) {
    res.status(400).json({ message: 'Invalid or expired token.' });
  }
};