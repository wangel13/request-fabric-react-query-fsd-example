import { keepPreviousData, queryOptions } from '@tanstack/react-query';
import * as qs from 'qs';
import { createQueryFn } from '../../api/createQueryFn';
import { createMutationFn } from '../../api/createMutationFn';
import { createDeleteMutationFn } from '../../api/createDeleteMutationFn';
import { createUpdateMutationFn } from '../../api/createUpdateMutationFn';
import { queryClient } from '../../api/query-client';

export const createQueries = <
  CreateResponse,
  CreateBody,
  ReadResponse,
  ReadOneResponse,
  UpdateResponse,
  UpdateBody,
  DeleteResponse,
  DeleteParams
>(
  entity: string
) => ({
  all: () =>
    queryOptions({
      queryKey: [entity],
    }),
  create: () => ({
    mutationKey: [entity],
    mutationFn: (body: CreateBody) =>
      createMutationFn<CreateResponse, CreateBody>({
        path: `/${entity}`,
        body,
      }),
    placeholderData: keepPreviousData,
    onSuccess: () => {
      // Optional: Invalidate the query cache after successful mutation
      queryClient.invalidateQueries({ queryKey: [entity] });
    }
  }),
  read: (filters: unknown) =>
    queryOptions({
      queryKey: [entity, filters],
      queryFn: () =>
        createQueryFn<ReadResponse>({
          path: `/${entity}?${qs.stringify(filters)}`,
        }),
      placeholderData: keepPreviousData,
    }),
  readOne: ({ id }: { id: unknown }) =>
    queryOptions({
      queryKey: [entity, id],
      queryFn: () =>
        createQueryFn<ReadOneResponse>({
          path: `/${entity}/${id}`,
        }),
      placeholderData: keepPreviousData,
      enabled: !!id,
    }),
  update: () => ({
    mutationKey: [entity],
    mutationFn: ({ id, body } : { id: unknown, body: UpdateBody }) =>
      createUpdateMutationFn<UpdateResponse, UpdateBody>({
        path: `/${entity}/${id}`,
        body,
      }),
    placeholderData: keepPreviousData,
    onSuccess: () => {
      // Optional: Invalidate the query cache after successful mutation
      queryClient.invalidateQueries({ queryKey: [entity] });
    }
  }),
  delete: () => ({
    mutationKey: [entity],
    mutationFn: (params: DeleteParams) =>
      createDeleteMutationFn<DeleteResponse>({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        path: `/${entity}/${params.id}`,
      }),
    placeholderData: keepPreviousData,
    onSuccess: () => {
      // Optional: Invalidate the query cache after successful mutation
      queryClient.invalidateQueries({ queryKey: [entity] });
    }
  }),
});
