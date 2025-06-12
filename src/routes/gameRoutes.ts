import { Router } from 'express';
import {
  addPokemon,
  allPokemons,
  verifyPokemonPosition,
} from '../controllers/gameController';

const gameRoutes = Router();

gameRoutes.get('/pokemons', allPokemons);
gameRoutes.post('/pokemon/new', addPokemon);
gameRoutes.post('/pokemon/verify/:id', verifyPokemonPosition);

export default gameRoutes;
