import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Home } from './modules/home/Home';

class App extends React.PureComponent {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
