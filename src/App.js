import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import HomeCont from './containers/home-container';
import PeopleCont from './containers/people-container';

const App = () => (
  <div>
    <Router history={browserHistory}>
      <Route path='/' component={HomeCont} />
      <Route path='/people' component={PeopleCont} />
    </Router>

  </div>
);

export default App;

