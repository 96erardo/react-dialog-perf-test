import { client } from '../../shared/config/client';
import { QueryResult } from '../../shared/types';
import { FETCH_TO_DOS } from './to-do-queries';
import { FetchToDos, FetchToDosVariables, ToDoFilter, SortOrder } from '../../shared/graphql-types';

/**
 * Fetches a list of todos
 * 
 * @param page - The page to fetch the items from
 * 
 * @returns The list of to dos
 */
export async function fetchToDos (page: number = 1): Promise<QueryResult<FetchToDos>> {
  const filter: ToDoFilter = {};
  const first: number = 10;
  const skip: number = first * (page - 1);
  const sort = [{ identifier: SortOrder.ASC }];
  let res;

  try {
    res = await client.query<FetchToDos, FetchToDosVariables>({
      query: FETCH_TO_DOS,
      variables: { filter, first, skip, sort },
      fetchPolicy: 'network-only',
    });

  } catch (e) {
    console.log('fetchToDos', e.message);

    return [e];
  }

  console.log('fetchToDos', res.data);

  return [null, res.data];
}