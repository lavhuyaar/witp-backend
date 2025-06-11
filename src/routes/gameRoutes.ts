import { Router } from 'express';
import { getPokemons } from '../controllers/gameController';

const gameRoutes = Router();

gameRoutes.get('/pokemons', getPokemons);

export default gameRoutes;
