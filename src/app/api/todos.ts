import { QueryKey, queryOptions, useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { ResType } from './types';
import { parseError, parseResponse } from './utils';

export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export function getTodosApi(
  page: string,
  limit: string
): Promise<ResType<TodoType[]>> {
  return new Promise((resolve, reject) => {
    axios
      .get<TodoType[], AxiosResponse<TodoType[], any>, undefined>('/', {
        data: undefined,
        headers: undefined,
        params: { page, limit },
      })
      .then((response) => {
        resolve(parseResponse(response));
      })
      .catch((error) => {
        reject(parseError(error));
      });
  });
}

export function getTodosQueryKey(page: string, limit: string): QueryKey {
  return ['todos', page, limit];
}

export function getTodosQueryOptions(page: string, limit: string) {
  return queryOptions<ResType<TodoType[]>, any, ResType<TodoType[]>, QueryKey>({
    queryKey: getTodosQueryKey(page, limit),
    queryFn: () => getTodosApi(page, limit),
  });
}

export function useGetTodosQuery(page: string, limit: string) {
  return useQuery(getTodosQueryOptions(page, limit));
}
