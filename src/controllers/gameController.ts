import { NextFunction, Request, Response } from 'express';
import { createNewPokemon, getPokemons } from '../db/queries/gameQueries';

export const allPokemons = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const pokemons = await getPokemons();

  if (!pokemons) {
    res.status(400).json({
      message: 'Unable to fetch pokemons!',
    });
    return;
  }

  res.status(200).json({
    pokemons,
    message: 'Pokemons fetched successfully!',
  });

  return;
};

export const addPokemon = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    name,
    image,
    PositionXLeft,
    PositionXRight,
    PositionYTop,
    PositionYBottom,
  } = req.body;

  if (
    !name ||
    !image ||
    !PositionXLeft ||
    !PositionXRight ||
    !PositionYTop ||
    !PositionYBottom
  ) {
    res.status(400).json({
      message: 'Pokemon name, image or position missing!',
    });
    return;
  }

  const pokemon = await createNewPokemon(
    name,
    image,
    PositionXLeft,
    PositionXRight,
    PositionYTop,
    PositionYBottom,
  );

  if (!pokemon) {
    res.status(400).json({
      message: 'Unable to add pokemon!',
    });
    return;
  }

  res.status(201).json({
    pokemon,
    message: 'Pokemons added successfully!',
  });
};
