import { Router } from 'express';
import jwt from 'jsonwebtoken';
import models from '../models';

const router = Router();
const refreshTokens = [];

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = models.users.find(
    user => user.email === email && user.password === password
  );

  if (user) {
    const accessToken = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1m' }
    );
    const refreshToken = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    refreshTokens.push(refreshToken);
    res.json({ accessToken, refreshToken });
  } else {
    res.send('Username or password incorrect').status(401);
  }
});

router.post('/o/token', (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.sendStatus(401);
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(401);
  }
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(401);
    }

    const accessToken = jwt.sign(
      { userId: user.userId, role: user.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1m' }
    );

    res.json({ accessToken, refreshToken });
  });
});

export default router;
