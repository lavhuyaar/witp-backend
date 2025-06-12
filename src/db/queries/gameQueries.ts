import db from '../db';

export const getPokemons = async () => {
  const pokemons = await db.pokemon.findMany({
    take: 5,
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
