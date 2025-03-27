import { describe, it, expect, vi } from 'vitest';
import { createQueries } from './createQueries.ts';
import * as api from '../../api/createQueryFn';
import { createMutationFn } from '../../api/createMutationFn';
import { createUpdateMutationFn } from '../../api/createUpdateMutationFn';
import { createDeleteMutationFn } from '../../api/createDeleteMutationFn';

vi.mock('../../api/createQueryFn', () => ({
  createQueryFn: vi.fn(),
}));

vi.mock('../../api/createMutationFn', () => ({
  createMutationFn: vi.fn(),
}));

vi.mock('../../api/createDeleteMutationFn', () => ({
  createDeleteMutationFn: vi.fn(),
}));

vi.mock('../../api/createUpdateMutationFn', () => ({
  createUpdateMutationFn: vi.fn(),
}));

describe('createQueries', () => {
  const entity = 'user';

  it('should return correct query options for "all"', () => {
    const queries = createQueries(entity);
    const result = queries.all();

    expect(result.queryKey).toEqual([entity]);
  });

  it('should create mutation for "create"', () => {
    const queries = createQueries(entity);
    const body = { name: 'Alexander' };

    queries.create().mutationFn(body);

    expect(createMutationFn).toHaveBeenCalledWith({
      path: `/${entity}`,
      body,
    });
  });

  it('should return correct query options for "read"', () => {
    const queries = createQueries(entity);
    const filters = { page: 1 };
    
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    queries.read(filters).queryFn();

    expect(api.createQueryFn).toHaveBeenCalledWith({
      path: `/${entity}?page=1`,
    });
  });

  it('should return correct query options for "readOne"', () => {
    const queries = createQueries(entity);
    const id = 123;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    queries.readOne({ id }).queryFn();

    expect(api.createQueryFn).toHaveBeenCalledWith({
      path: `/${entity}/${id}`,
    });
  });

  it('should create mutation for "update"', () => {
    const queries = createQueries(entity);
    const id = 123;
    const body = { name: 'Updated' };

    queries.update().mutationFn({ id, body });

    expect(createUpdateMutationFn).toHaveBeenCalledWith({
      path: `/${entity}/${id}`,
      body,
    });
  });

  it('should create mutation for "delete"', () => {
    const queries = createQueries(entity);
    const params = { id: 123 };

    queries.delete().mutationFn(params);

    expect(createDeleteMutationFn).toHaveBeenCalledWith({
      path: `/${entity}/${params.id}`,
    });
  });
});
