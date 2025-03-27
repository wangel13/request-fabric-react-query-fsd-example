import { api } from './api-client';

type Props<Body> = {
  path: string;
  body: Body;
};

export const createUpdateMutationFn = async <Response, Body>({
  path,
  body,
}: Props<Body>) => {
  const { data } = await api.patch<Response>(path, body);
  return data;
};
