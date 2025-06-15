import db from '../db/db';

interface Pokemon {
  name: string;
  image: string;
  PositionXLeft: number;
  PositionXRight: number;
  PositionYTop: number;
  PositionYBottom: number;
}

const pokemonData: Pokemon[] = [
  {
    name: 'Charizard',
    image:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/pokemon-charizard-sneakers.jpg',
    PositionXLeft: 930,
    PositionXRight: 970,
    PositionYTop: 540,
    PositionYBottom: 590,
  },
  {
    name: 'Snorunt',
    image:
      'https://staticg.sportskeeda.com/editor/2021/07/bb941-16269264555138-800.jpg',
    PositionXLeft: 485,
    PositionXRight: 515,
    PositionYTop: 1250,
    PositionYBottom: 1285,
  },
  {
    name: 'Swinub',
    image: 'https://img.pokemondb.net/artwork/large/swinub.jpg',
    PositionXLeft: 750,
    PositionXRight: 790,
    PositionYTop: 1675,
    PositionYBottom: 1705,
  },
  {
    name: 'Gyarados',
    image:
      'https://mktg-assets.tcgplayer.com/fit-in/1000x1000/filters:quality(75)/content/pokemon/8_21/16/C-08-16-2021-PKM-OG-Gyarados@2x.jpg',
    PositionXLeft: 1350,
    PositionXRight: 1405,
    PositionYTop: 175,
    PositionYBottom: 225,
  },
  {
    name: 'Bisharp',
    image:
      'https://ohmyfacts.com/wp-content/uploads/2024/10/28-facts-about-bisharp-pokemon-1730339309.jpg',
    PositionXLeft: 1210,
    PositionXRight: 1247,
    PositionYTop: 1527,
    PositionYBottom: 1565,
  },
];

const seed = async () => {
  await db.pokemon.deleteMany(); //Cleans the Pokemon table

  await db.pokemon.createMany({
    data: pokemonData,
  });

  console.log('Pokemons seeded successfully!');
};

seed()
  .catch((err) => {
    console.error('Seeding failed :: ', err);
    process.exit(1);
  })
  .finally(() => {
    db.$disconnect();
  });
