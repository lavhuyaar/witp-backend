import { Router } from 'express';
import { addPokemon, allPokemons } from '../controllers/gameController';

const gameRoutes = Router();

gameRoutes.get('/pokemons', allPokemons);
gameRoutes.post('/pokemon/new', addPokemon);

export default gameRoutes;
