import jwt from 'jsonwebtoken';

const checkToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) res.sendStatus(401);

  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(401);
    }

    req.user = user;
    next();
  });
};

export default checkToken;
