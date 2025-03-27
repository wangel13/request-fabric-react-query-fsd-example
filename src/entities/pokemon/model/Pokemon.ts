export interface CreatePokemonResponse {
  id: string;
  name: string;
}

export interface CreatePokemonBody {
  name: string;
}

export interface ReadPokemonResponse {
  results: {
    id: string;
    name: string;
  }[];
}

export interface ReadOnePokemonResponse {
  results: {
    name: string;
  };
}

export interface UpdatePokemonResponse {
  id: string;
  name: string;
}

export interface UpdatePokemonBody {
  name: string;
}

export interface DeletePokemonResponse {
  id: string;
  name: string;
}

export interface DeletePokemonParams {
  id: string;
}
