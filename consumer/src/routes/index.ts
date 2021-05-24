import * as express from 'express';

import tripRoutes from './trip.routes';

const router = express.Router();

router.use('/trip', tripRoutes);

export default router;
