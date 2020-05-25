import { Router } from 'express';
import models from '../models';

const router = Router();

router.get('/me', (req, res) => {
  const user = models.users.find(user => user.id === req.user.userId);
  if (!user) return res.status(404).send('No user for this token');

  const userWithoutPassword = {
    ...user
  };
  delete userWithoutPassword.password;

  return res.json({ user: userWithoutPassword });
});

export default router;
