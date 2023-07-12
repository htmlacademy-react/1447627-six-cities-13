import React from 'react';
import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../authorization-status';

type PrivateRouteProps = {
  authorizationStatus?: AuthorizationStatus;
  children: React.JSX.Element;
}

function PrivateRoute({authorizationStatus = AuthorizationStatus.Unknown, children}: PrivateRouteProps): React.JSX.Element {
  return(
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to="/login"/>
  );
}

export default PrivateRoute;
