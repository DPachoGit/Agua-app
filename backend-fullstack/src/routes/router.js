import {Router} from 'express';
import authRouter from './authRouter.js';
import beachRouter from './beachRouter.js';

const router = Router();

router.use('/', authRouter);
router.use('/', beachRouter);

export default router;