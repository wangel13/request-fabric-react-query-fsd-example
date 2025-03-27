import { useState } from "react";
import { usePokemonList } from "../entities/pokemon/api/usePokemonList";
import { CreatePokemon } from "../features/create-pokemon/ui/CreatePokemon";
import { UpdatePokemon } from "../features/update-pokemon/ui/UpdatePokemon";
import { DeletePokemon } from "../features/delete-pokemon/ui/DeletePokemon";
import { PokemonCard } from "../features/pokemon-card/ui/PokemonCard";

export function IndexPage() {
  const [selectedPokemonId, setSelectedPokemonId] = useState<string | null>(
    null
  );
  const [offset, setOffset] = useState(0);
  const { data, error } = usePokemonList({ limit: 10, offset });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error loading Pokemons, enable mocks</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Pokemon Manager</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setOffset((offset) => offset + 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Next Page (offset: {offset})
            </button>
            <CreatePokemon pokemon={{ name: "Pikachu" }} />
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data?.results.map(({ name, id }) => (
                <div
                  key={name}
                  onClick={() => setSelectedPokemonId(id)}
                  className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  {name}
                </div>
              ))}
            </div>
            {selectedPokemonId && (
              <div className="flex justify-between p-4 shadow bg-gray-50 rounded">
                <PokemonCard id={selectedPokemonId} />
                <div className="flex gap-2 justify-between">
                  <UpdatePokemon
                    id={selectedPokemonId}
                    pokemon={{ name: "Raichu" }}
                  />
                  <DeletePokemon id={selectedPokemonId} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
