import { useQuery } from "@tanstack/react-query";
import { pokemonQueries } from "./pokemon.query";

type Props = {
  id: string | null;
};

export const usePokemon = ({ id }: Props) => {
  return useQuery({
    ...pokemonQueries.readOne({ id }),
  });
};
