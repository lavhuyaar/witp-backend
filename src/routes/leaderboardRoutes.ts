import { Router } from 'express';
import {
  addToLeaderboard,
  getLeaderboard,
} from '../controllers/leaderboardController';

const leaderboardRoutes = Router();

leaderboardRoutes.get('/leaderboard', getLeaderboard);
leaderboardRoutes.post('/leaderboard', addToLeaderboard);

export default leaderboardRoutes;
