import { api } from './api-client';

type Props = {
  path: string;
};

export const createDeleteMutationFn = async <Response>({ path }: Props) => {
  const { data } = await api.delete<Response>(path);
  return data;
};