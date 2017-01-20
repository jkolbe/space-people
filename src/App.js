import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Navigation from './components/navigation';
import HomeCont from './containers/home-container';
import CraftCont from './containers/craft-container';
import LocationCont from './containers/location-container';

const App = () => (
  <div>
    <Router history={browserHistory}>
      <Route path='' component={Navigation} >
        <Route path='/' component={HomeCont} />
        <Route path='/craft' component={CraftCont} />
        <Route path='/location' component={LocationCont} />
      </Route>
    </Router>
  </div>
);

export default App;

