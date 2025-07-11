import db from '../db';

export const getPokemons = async () => {
  const pokemons = await db.pokemon.findMany({
    take: 5,
    select: {
      id: true,
      name: true,
      image: true,
    },
  });
  return pokemons;
};

export const createNewPokemon = async (
  name: string,
  image: string,
  PositionXLeft: number,
  PositionXRight: number,
  PositionYTop: number,
  PositionYBottom: number,
) => {
  const pokemon = await db.pokemon.create({
    data: {
      name,
      image,
      PositionXLeft,
      PositionXRight,
      PositionYTop,
      PositionYBottom,
    },
  });

  return pokemon;
};

export const getPokemonById = async (id: string) => {
  const pokemon = await db.pokemon.findFirst({
    where: {
      id,
    },
  });

  return pokemon;
};
