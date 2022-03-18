import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import isTokenValid from '../../utilities/IsTokenValid/isTokenValid';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isTokenValid() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/home' }} />
      )
    }
  />
);

export default ProtectedRoute;
