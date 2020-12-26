import React, { useCallback, useState } from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel } from '../../shared/components/TabPanel';

import { NoContextView } from '../to-do/components/NoContextView';
import { WithContextView } from '../to-do/components/WithContextView';

export const Home: React.FC = () => {
  const [tab, setTab] = useState(0);

  const handleChange = useCallback((event, value: number) => {
    setTab(value);
  }, []);

  return (
    <Box width={1} height={1}>
      <AppBar color="transparent" position="static">
        <Tabs 
          centered
          value={tab} 
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab 
            id="simple-tab-0"
            label="No Context"
            aria-controls="simple-tabpanel-0"
          />
          <Tab 
            id="simple-tab-1"
            label="With Context"
            aria-controls="simple-tabpanel-1"
          />
        </Tabs>
      </AppBar>
      <TabPanel current={tab} index={0}>
        <NoContextView />
      </TabPanel>
      <TabPanel current={tab} index={1}>
        <WithContextView />
      </TabPanel>
    </Box>
  );
}