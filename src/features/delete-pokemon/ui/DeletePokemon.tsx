import { usePokemonDelete } from "../../../entities/pokemon/api/usePokemonDelete";

type Props = {
  id: string;
};

export const DeletePokemon = ({ id }: Props) => {
  const { mutate: deletePokemon } = usePokemonDelete();

  const handleDelete = () => {
    deletePokemon({ id });
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
    >
      Delete Pokemon
    </button>
  );
};
