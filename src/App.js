import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Navigation from './components/navigation';
import HomeCont from './containers/home-container';
import PeopleCont from './containers/people-container';
import LocationCont from './containers/location-container';

const App = () => (
  <div>
    <Router history={browserHistory}>
      <Route path='' component={Navigation} >
        <Route path='/' component={HomeCont} />
        <Route path='/people' component={PeopleCont} />
        <Route path='/location' component={LocationCont} />
      </Route>
    </Router>
  </div>
);

export default App;

