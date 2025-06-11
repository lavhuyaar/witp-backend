import { Router } from 'express';
import gameRoutes from './gameRoutes';

const routes = Router();
routes.use(gameRoutes);

export default routes;
