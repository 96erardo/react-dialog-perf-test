import React, { useCallback } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { useDialogParams, useDialogCloser } from 'react-dialog-handler';
import { 
  FetchToDos_toDosList_items as ToDo
} from '../../shared/graphql-types';

export const modalId = 'delete-dialog';

export const ContextDeleteDialog: React.FC = () => {
  const { open } = useDialogParams<Params>(modalId);
  const closeDialog = useDialogCloser();

  const onClose = useCallback(() => {
    closeDialog(modalId);
  }, [closeDialog]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete ToDo</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this ToDo
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onClose} color="secondary" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export type Params = {
  selected: ToDo | null
}