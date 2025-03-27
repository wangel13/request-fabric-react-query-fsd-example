import { usePokemonUpdate } from "../../../entities/pokemon/api/usePokemonUpdate";
import { UpdatePokemonBody } from "../../../entities/pokemon/model/Pokemon";

type Props = {
  id: string;
  pokemon: UpdatePokemonBody;
};

export const UpdatePokemon = ({ id, pokemon }: Props) => {
  const { mutate: updatePokemon } = usePokemonUpdate();

  const handleUpdate = () => {
    updatePokemon({ id, body: { name: pokemon.name } });
  };

  return (
    <button
      onClick={handleUpdate}
      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
    >
      Update to {pokemon.name}
    </button>
  );
};
