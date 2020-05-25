import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import authMiddleware from './middleware/checkAuth';
import authController from './controllers/auth';
import userController from './controllers/user';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', authController);
app.use('/user', authMiddleware, userController);

app.listen(process.env.PORT, () =>
  console.log(`Server on port ${process.env.PORT}`)
);
