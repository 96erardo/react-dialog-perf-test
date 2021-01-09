import { useContext } from 'react';
import { OpenerContext, Opener } from '../with-context/DialogContext';

export function useDialogOpener () {
  const openDialog = useContext<Opener>(OpenerContext);

  return openDialog;
}