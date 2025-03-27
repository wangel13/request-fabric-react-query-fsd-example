import { api } from './api-client';

type Props<Body> = {
  path: string;
  body: Body;
};

export const createMutationFn = async <Response, Body>({
  path,
  body,
}: Props<Body>) => {
  const { data } = await api.post<Response>(path, body);
  return data;
};
