import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Layout } from './shared/components/Layout';
import { NoContextView } from './to-do/no-context/NoContextView';
import { WithContextView } from './to-do/with-context/WithContextView';
import { DialogHandler } from 'react-dialog-handler';

class App extends React.PureComponent {
  render () {
    return (
      <Router>
        <DialogHandler>
            <Layout>
              <Switch>
                <Route path="/no-context" component={NoContextView} />
                <Route path="/with-context" component={WithContextView} />
                <Redirect to="/no-context" />
              </Switch>
            </Layout>
        </DialogHandler>
      </Router>
    );
  }
}

export default App;
