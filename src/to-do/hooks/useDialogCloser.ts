import { useContext } from 'react';
import { CloserContext } from '../with-context/DialogContext';

export function useDialogCloser () {
  const closeDialog = useContext(CloserContext);

  return closeDialog;
}