import { usePokemonCreate } from "../../../entities/pokemon/api/usePokemonCreate";
import { CreatePokemonBody } from "../../../entities/pokemon/model/Pokemon";

type Props = {
  pokemon: CreatePokemonBody;
};

export const CreatePokemon = ({ pokemon }: Props) => {
  const { mutate: createPokemon } = usePokemonCreate();

  const handleCreate = () => {
    createPokemon({
      name: pokemon.name,
    });
  };

  return (
    <button
      onClick={handleCreate}
      className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
    >
      Создать {pokemon.name}
    </button>
  );
};
