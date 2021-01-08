import { useContext } from 'react';
import { OpenerContext, Opener } from '../with-context/DialogContext';

export function useDialogOpener<T>() {
  const openDialog = useContext<Opener<T>>(OpenerContext);

  return openDialog;
}