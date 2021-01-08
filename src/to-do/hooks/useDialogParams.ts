import { useContext } from 'react';
import { ParamsContext, State } from '../with-context/DialogContext';

/**
 * Use the specified dialog params
 * 
 * @param id - The dialog id
 * 
 * @returns The hook result
 */
export function useDialogParams<T>(id: string): { open: boolean, params?: T } {
  const state = useContext<State<T>>(ParamsContext);

  if (!state[id]) {
    return { open: false };
  }

  return state[id];
}