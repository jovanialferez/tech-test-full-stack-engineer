import { Router } from 'express';
import LeadsRouter from './leads';

const router = Router();

router.use('/leads', LeadsRouter);

export default router;