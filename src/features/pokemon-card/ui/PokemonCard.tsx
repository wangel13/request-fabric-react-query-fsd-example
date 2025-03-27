import { usePokemon } from "../../../entities/pokemon/api/usePokemon";

type Props = {
  id: string | null;
};

export const PokemonCard = ({ id }: Props) => {
  const { data: onePokemon, error } = usePokemon({ id });

  if (error) {
    return (
      <div className="rounded-md bg-red-100 border-red-500 border p-2">
        <div className="text-red-500">Error loading Pokemon</div>
      </div>
    );
  }

  return (
    <>
      {onePokemon?.results?.name && (
        <div>
          <h2>Selected Pokemon:</h2>
          <p className="font-semibold">{onePokemon.results.name}</p>
        </div>
      )}
    </>
  );
};
