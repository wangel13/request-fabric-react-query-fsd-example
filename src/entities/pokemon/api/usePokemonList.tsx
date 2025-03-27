import { useQuery } from '@tanstack/react-query';
import { pokemonQueries } from './pokemon.query';

type Props = {
  limit: number;
  offset: number;
};

export const usePokemonList = ({ limit, offset }: Props) => {
  return useQuery({
    ...pokemonQueries.read({ limit, offset }),
  });
};
