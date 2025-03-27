import { useMutation } from '@tanstack/react-query';
import { pokemonQueries } from './pokemon.query';

export const usePokemonCreate = () => {
  return useMutation({
    ...pokemonQueries.create(),
  });
};
