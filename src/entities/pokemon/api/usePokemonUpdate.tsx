import { useMutation } from '@tanstack/react-query';
import { pokemonQueries } from './pokemon.query';

export const usePokemonUpdate = () => {
  return useMutation({
    ...pokemonQueries.update(),
  });
};
