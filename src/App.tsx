import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Layout } from './shared/components/Layout';
import { NoContextView } from './modules/to-do/components/NoContextView';
import { WithContextView } from './modules/to-do/components/WithContextView';

class App extends React.PureComponent {
  render () {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/no-context" component={NoContextView} />
            <Route path="/with-context" component={WithContextView} />
            <Redirect to="/no-context" />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
