import React, { Dispatch, SetStateAction, useCallback } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { 
  FetchToDos_toDosList_items as ToDo
} from '../../shared/graphql-types';

export const NoContextDeleteDialog: React.FC<Props> = ({ open, setDialog }) => {

  const onClose = useCallback(() => {
    setDialog({ open: false, selected: null });
  }, [setDialog]);


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

type Props = {
  open: boolean,
  selected: ToDo | null,
  setDialog: Dispatch<SetStateAction<{ open: boolean, selected: ToDo | null }>>,
}