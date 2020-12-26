import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { useHistory } from 'react-router-dom';

export const Layout: React.FC<Props> = ({ children }) => {
  const history = useHistory();

  return (
    <Box width={1} height={1}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => history.push('/no-context')}>
            no-context
          </Button>
          <Button color="inherit" onClick={() => history.push('/with-context')}>
            with-context
          </Button>
        </Toolbar>
      </AppBar>
      <Box width={1} paddingTop={2}>
        {children}
      </Box>
    </Box>
  );
}

type Props = {
  children: React.ReactElement
}