import { http, HttpResponse } from 'msw';

const pokemons = [
  { id: '1', name: 'Bulbasaur' },
  { id: '2', name: 'Ivysaur' },
  { id: '3', name: 'Venusaur' },
  { id: '4', name: 'Charmander' },
  { id: '5', name: 'Charmeleon' },
];

export const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemon', () => {
    return HttpResponse.json({
      results: pokemons,
    });
  }),

  http.get('https://pokeapi.co/api/v2/pokemon/:id', ({ params }) => {
    const pokemon = pokemons.find((p) => p.id === params.id);
    if (!pokemon) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json({ results: pokemon });
  }),

  http.post('https://pokeapi.co/api/v2/pokemon', async ({ request }) => {
    const body = await request.json();
    const newPokemon = {
      id: String(pokemons.length + 1),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      name: body?.name,
    };
    pokemons.push(newPokemon);
    return HttpResponse.json(newPokemon);
  }),

  http.patch('https://pokeapi.co/api/v2/pokemon/:id', async ({ request, params }) => {
    const body = await request.json();
    const index = pokemons.findIndex((p) => p.id === params.id);
    const newPokemon = {
      id: params.id,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      name: body?.name,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    pokemons[index] = {...pokemons[index], ...newPokemon};
    return HttpResponse.json(newPokemon);
  }),

  http.delete('https://pokeapi.co/api/v2/pokemon/:id', ({ params }) => {
    const index = pokemons.findIndex((p) => p.id === params.id);
    if (index === -1) {
      return new HttpResponse(null, { status: 404 });
    }
    const [deletedPokemon] = pokemons.splice(index, 1);
    return HttpResponse.json(deletedPokemon);
  }),
];
