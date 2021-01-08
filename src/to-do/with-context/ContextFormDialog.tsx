import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { 
  FetchToDos_toDosList_items as ToDo 
} from '../../shared/graphql-types';
import { createToDo, updateToDo } from '../to-do-actions';
import { makeStyles } from '@material-ui/core/styles';
import { useDialogParams } from '../hooks/useDialogParams';
import { useDialogCloser } from '../hooks/useDialogCloser';

const initialState = {
  title: '',
  description: '',
  finished: false,
}

const useStyle = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
    }
  }
}))

export const modalId = 'toDo-form-dialog';

export const ContextFormDialog: React.FC<Props> = ({ onSubmitted }) => {
  const { open, params } = useDialogParams<Params>(modalId);
  const closeDialog = useDialogCloser();
  const [form, setForm] = useState<Form>(initialState);
  const [loading, setLoading] = useState(false);
  const classes = useStyle();

  useEffect(() => {
    if (open && params && params.toDo) {
      setForm(prevState => ({
        ...prevState,
        title: params.toDo?.title || '',
        description: params.toDo?.description || '',
        finished: params.toDo?.finished || false,
      }));

    } else if (open && (!params || params.toDo === null)) {
      setForm(initialState);
    }
  }, [open, params]);

  const onClose = useCallback(() => {
    closeDialog(modalId);
  }, [closeDialog]);

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    setForm(prevState => ({
      ...prevState,
      [name]: name === 'finished' ? checked : value
    }))
  }, []);

  const onSubmit = useCallback(async () => {
    setLoading(true);

    const [err, data] = params?.toDo ? (
      await updateToDo({
        id: params.toDo.id || '',
        title: form.title,
        description: form.description,
        finished: form.finished
      })
    ) : (
      await createToDo({
        title: form.title,
        description: form.description,
        finished: form.finished,
      })        
    );

    setLoading(false);

    if (err) {
      alert(err.message);
    }

    if (data) {
      onSubmitted();
    }

    onClose();
  }, [form, onClose, onSubmitted]);

  return (
    <Dialog maxWidth="sm" open={open}>
      <DialogTitle>
        {params?.toDo ? 'Update To Do' : 'Create To Do'}
      </DialogTitle>
      <DialogContent className={classes.root}>
        <TextField 
          fullWidth
          id="title"
          name="title"
          label="Title"
          variant="outlined"
          value={form.title}
          onChange={onInputChange}
        />
        <TextField 
          fullWidth
          id="description"
          name="description"
          label="Description"
          variant="outlined"
          value={form.description}
          onChange={onInputChange}
        />
        <Switch 
          name="finished"
          checked={form.finished}
          onChange={onInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button 
          color="primary"
          disabled={loading}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button 
          color="primary"
          disabled={loading} 
          onClick={onSubmit}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

type Props = {
  onSubmitted: () => void
}

type Form = {
  title: string,
  description: string,
  finished: boolean
}

export type Params = {
  toDo?: ToDo | null
}