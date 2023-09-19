import {Router} from 'express';
import authRouter from './authRouter.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.use('/', authRouter);

export default router;