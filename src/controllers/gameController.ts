import { NextFunction, Request, Response } from 'express';
import {
  createNewPokemon,
  getPokemonById,
  getPokemons,
} from '../db/queries/gameQueries';

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
    typeof PositionXLeft !== 'number' ||
    typeof PositionXRight !== 'number' ||
    typeof PositionYTop !== 'number' ||
    typeof PositionYBottom !== 'number'
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

export const verifyPokemonPosition = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  const { positionX, positionY } = req.body;

  const isPositionXInvalid: boolean = !positionX && positionX !== 0;
  const isPositionYInvalid: boolean = !positionY && positionY !== 0;

  if (isPositionXInvalid || isPositionYInvalid) {
    res.status(400).json({
      message: 'Missing or invalid pokemon position!',
    });
    return;
  }

  const pokemon = await getPokemonById(id);

  if (!pokemon) {
    res.status(404).json({
      message: 'Pokemon not found!',
    });
    return;
  }

  const isPositionXAccurate: boolean =
    positionX >= pokemon.PositionXLeft && positionX <= pokemon.PositionXRight;
  const isPositionYAccurate: boolean =
    positionY >= pokemon.PositionYTop && positionY <= pokemon.PositionYBottom;

  if (isPositionXAccurate && isPositionYAccurate) {
    res.status(200).json({
      message: `You found ${pokemon.name}!`,
    });
    return;
  } else {
    res.status(400).json({
      message: 'Oops, you missed!',
    });
    return;
  }
};
