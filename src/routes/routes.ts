import { Router } from 'express';
import gameRoutes from './gameRoutes';
import leaderboardRoutes from './leaderboardRoutes';

const routes = Router();

routes.use(gameRoutes);
routes.use(leaderboardRoutes);

export default routes;
