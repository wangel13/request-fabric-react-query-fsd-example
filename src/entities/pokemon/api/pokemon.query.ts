import { createQueries } from '../../../shared/lib/createQueries/createQueries';
import {
  CreatePokemonResponse,
  CreatePokemonBody,
  ReadPokemonResponse,
  ReadOnePokemonResponse,
  UpdatePokemonResponse,
  UpdatePokemonBody,
  DeletePokemonResponse,
  DeletePokemonParams,
} from '../model/Pokemon';

export const pokemonQueries = createQueries<
  CreatePokemonResponse,
  CreatePokemonBody,
  ReadPokemonResponse,
  ReadOnePokemonResponse,
  UpdatePokemonResponse,
  UpdatePokemonBody,
  DeletePokemonResponse,
  DeletePokemonParams
>('pokemon');
