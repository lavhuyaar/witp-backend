import { NextFunction, Request, Response } from 'express';

export const getPokemons = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(200).json({ message: 'test' });
};
