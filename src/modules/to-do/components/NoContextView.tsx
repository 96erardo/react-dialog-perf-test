import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SyncIcon from '@material-ui/icons/Sync';
import { useToDos } from '../hooks/useToDos';
import MaterialTable from 'material-table';
import { columns } from '../to-do-model';
import { icons } from '../../../shared/config/table-icons';

export const NoContextView: React.FC = () => {
  const { loading, items, count, page, setPage, refresh } = useToDos();

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
          <Typography variant="h4">To Dos</Typography>
          <Box>
            <IconButton 
              size="small"
              disabled={loading} 
              onClick={refresh}
            >
              <SyncIcon />
            </IconButton>
          </Box>
        </Box>
        <Divider />
        <MaterialTable 
          columns={columns}
          data={items}
          page={page}
          icons={icons}
          onChangePage={setPage}
          isLoading={loading}
          totalCount={count}
          components={{
            Container: Box
          }}
          options={{
            pageSize: 10,
            search: false,
            toolbar: false,
            showTitle: false,
            pageSizeOptions: [],
            headerStyle: {
              backgroundColor: '#f50057',
              color: '#fff',
            }
          }}
        />
      </Card>
    </Container>
  )
}