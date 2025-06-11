import { NextFunction, Request, Response } from 'express';
import { addUser, getUsersData } from '../db/queries/leaderboardQueries';

export const getLeaderboard = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const users = await getUsersData();

  if (!users) {
    res.status(400).json({
      message: "Unable to fetch leaderboard's data!",
    });
    return;
  }

  res.status(200).json({
    users,
    message: "Leaderboard's data fetched successfully!",
  });
};

export const addToLeaderboard = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, timeTook } = req.body;

  if (!name || !timeTook) {
    res.status(400).json({
      message: 'Name or time took missing!',
    });
    return;
  }

  const user = await addUser(name, timeTook);

  if (!user) {
    res.status(400).json({
      message: "Unable to add user's score!",
    });
    return;
  }

  res.status(201).json({
    user,
    message: "User's score successfully added!",
  });

  return;
};
