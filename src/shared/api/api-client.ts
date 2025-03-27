import axios from 'axios';

export const api = axios.create({
  // В реальном проекте можно использовать baseURL из .env
  baseURL: 'https://pokeapi.co/api/v2',
});
