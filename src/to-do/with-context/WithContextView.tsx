import React, { useCallback } from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TablePagination from '@material-ui/core/TablePagination';
import SyncIcon from '@material-ui/icons/Sync';
import { useToDos } from '../hooks/useToDos';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { ContextFormDialog, Params, modalId } from './ContextFormDialog';
import { ToDoRow } from './ContextRow';
import { useDialogOpener } from '../hooks/useDialogOpener';

const useStyle = makeStyles(theme => ({
  head: { backgroundColor: theme.palette.secondary.main },
  cell: { color: theme.palette.common.white },
  icon: { '& MuiButton-startIcon': { marginRight: '0px' } }
}))

export const WithContextView: React.FC = () => {
  const { items, loading, count, page, setPage, refresh } = useToDos();
  const openDialog = useDialogOpener();
  const classes = useStyle();

  const onForm = useCallback(() => {
    openDialog<Params>(modalId, { toDo: null });
  }, [openDialog]);

  return (
    <Container maxWidth="md">
      <Card variant="outlined">
        <Box
          paddingX={2}
          paddingY={1}
          display="flex" 
          flexDirection="row" 
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4">With Context - To Dos</Typography>
          <Box>
            <ButtonGroup className={classes.icon} color="primary" variant="contained">
              <Button 
                color="secondary"
                disabled={loading}
                onClick={() => onForm()}
              >
                Create To Do
              </Button>
              <Button 
                color="secondary"
                disabled={loading}
                onClick={refresh}
                startIcon={<SyncIcon />}
              />
            </ButtonGroup>
          </Box>
        </Box>
        <Divider />
        <Table size="small">
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell 
                variant="head" 
                className={classes.cell}
              />                
              <TableCell 
                variant="head" 
                className={classes.cell}
              >
                Title
              </TableCell>
              <TableCell 
                variant="head" 
                className={classes.cell}
              >
                Description
              </TableCell>
              <TableCell 
                variant="head" 
                className={classes.cell}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4}>
                  <Box py={4} display="flex" justifyContent="center">
                    <CircularProgress 
                      variant="indeterminate" 
                      color="secondary"
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              items.map(toDo => (
                <ToDoRow 
                  key={toDo.id} 
                  toDo={toDo}
                />
              ))
            )}
          </TableBody>
        </Table>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <TablePagination 
            rowsPerPage={10}
            rowsPerPageOptions={[]}
            component="div"
            count={count}
            page={page - 1}
            onChangePage={(event, value) => setPage(value + 1)}
          />
        </Box>
      </Card>
      <ContextFormDialog onSubmitted={refresh} />
    </Container>
  )
}