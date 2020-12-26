import React from 'react';
import Box from '@material-ui/core/Box';

export const TabPanel: React.FC<Props> = ({ index, current, children, ...rest }) => {

  return (
    <div
      role="tabpanel"
      hidden={current !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...rest}
    >
      {current === index && (
        <Box width={1} p={2}>
          {children}
        </Box>
      )}
    </div>
  );
}

type Props = {
  index: number,
  current: number,  
  children: React.ReactElement
}