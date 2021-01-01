import { client } from '../../shared/config/client';
import { QueryResult, MutationResult } from '../../shared/types';
import { 
  FETCH_TO_DOS,
  CREATE_TO_DO,
  UPDATE_TO_DO,
  DELETE_TO_DO,
} from './to-do-queries';
import { 
  FetchToDos, 
  FetchToDosVariables, 
  ToDoFilter, 
  SortOrder,
  CreateToDo,
  CreateToDoVariables,
  UpdateToDo,
  UpdateToDoVariables,
  DeleteToDo, 
  DeleteToDoVariables
} from '../../shared/graphql-types';

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

/**
 * Creates a new To Do
 * 
 * @param data - The data needed to create a To Do
 * 
 * @returns {Promise<MutationResult<CreateToDo>} The created to do
 */
export async function createToDo (data: CreateToDoInput): Promise<MutationResult<CreateToDo>> {
  let res;

  if (!data.title || !data.description) {
    return [new Error('Form is incomplete')];
  }

  try {
    res = await client.mutate<CreateToDo, CreateToDoVariables>({
      mutation: CREATE_TO_DO,
      variables: {
        data: {
          title: data.title,
          description: data.description,
          finished: data.finished,
        }
      }
    });

  } catch (e) {
    console.log('createToDo', e.message);

    return [e];
  }

  console.log('createToDo', res.data);

  if (!res.data) {
    return [new Error('Could not create to do')];
  }

  return [null, res.data];
}

export type CreateToDoInput = {
  title: string,
  description: string,
  finished: boolean
}

/**
 * Updates the specified to do
 * 
 * @param data - The data to update the to do
 * 
 * @returns The updated to do
 */
export async function updateToDo (data: UpdateToDoInput): Promise<MutationResult<UpdateToDo>> {
  let res;

  if (!data.title || !data.description) {
    return [new Error('Form is incomplete')];
  }

  try {
    res = await client.mutate<UpdateToDo, UpdateToDoVariables>({
      mutation: UPDATE_TO_DO,
      variables: {
        filter: { id: data.id },
        data: {
          title: data.title,
          description: data.description,
          finished: data.finished,
        }
      }
    });

  } catch (e) {
    console.log('updateToDo', e.message);

    return [new Error(e.message)];
  }

  console.log('updateToDo', res.data);

  if (!res.data) {
    return [new Error('Could not update to do')];
  }

  return [null, res.data];
}

export type UpdateToDoInput = {
  id: string,
  title: string,
  description: string,
  finished: boolean
}

/**
 * Deletes the specified to do
 * 
 * @param id - The id of the to do about to delete
 * 
 * @returns The deleted to do
 */
export async function deleteToDo (id: string): Promise<MutationResult<boolean>> {
  let res;

  try {
    res = await client.mutate<DeleteToDo, DeleteToDoVariables>({
      mutation: DELETE_TO_DO,
      variables: {
        filter: { id },
        force: true
      }
    });

  } catch (e) {
    console.log('deleteToDo', e.message);

    return [e];
  }

  console.log('deleteToDo', res.data);

  if (!res.data) {
    return [new Error('Could not delete to do')];
  }

  return [null, true];
}