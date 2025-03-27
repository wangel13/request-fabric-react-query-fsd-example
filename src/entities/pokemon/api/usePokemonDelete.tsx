import { useMutation } from '@tanstack/react-query';
import { pokemonQueries } from './pokemon.query';

export const usePokemonDelete = () => {
  return useMutation({
    ...pokemonQueries.delete(),
  });
};