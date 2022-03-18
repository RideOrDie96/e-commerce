import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { routes } from './helpers/routes';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            exact={route.exact}
            path={route.path}
            render={route.component}
          />
        ))}
        <Route render={() => <Redirect to={{ pathname: '/home' }} />} />
      </Switch>
    </Router>
  );
};

export default Routes;
