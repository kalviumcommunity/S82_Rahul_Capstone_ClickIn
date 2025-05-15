import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  try {
    req.user = jwt.verify(req.headers.authorization?.split(' ')[1], process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
