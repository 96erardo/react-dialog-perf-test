import { useState, useEffect, useCallback, Dispatch, SetStateAction } from 'react';
import { FetchToDos_toDosList_items as ToDo } from '../../../shared/graphql-types';
import { fetchToDos } from '../to-do-actions';

const initialState = {
  items: [],
  count: 0,
  loading: true,
  error: null
}

export function useToDos (): HookResult {
  const [state, setState] = useState<State>(initialState);
  const [page, setPage] = useState(1);

  const fetch = useCallback(() => {
    setState(prevState => ({ ...prevState, loading: true }));

    fetchToDos(page).then(([err, data]) => {
      if (err) {
        setState({
          ...initialState,
          loading: false,
          error: err
        });
      }
  
      if (data) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          items: data.toDosList.items.map(todo => ({...todo})),
          count: data.toDosList.count,
        }))
      }
    });

  }, [page]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const refresh = useCallback(() => {
    if (page === 1) {
      fetch();
    } else {
      setPage(1);
    }
  }, [page, fetch]);

  return {
    ...state,
    page,
    setPage,
    refresh
  };
}

type State = {
  items: Array<ToDo>,
  count: number,
  loading: boolean,
  error: Error | null
}

type HookResult = State & {
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  refresh: () => void
}