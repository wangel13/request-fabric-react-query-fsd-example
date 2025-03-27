import { api } from './api-client';

type Props = {
  path: string;
};

export const createQueryFn = async <Response>({ path }: Props) => {
  const { data } = await api.get<Response>(path);
  return data;
};
