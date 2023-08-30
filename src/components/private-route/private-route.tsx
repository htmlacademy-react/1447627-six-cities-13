import React from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  children: React.JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute({children, authorizationStatus}: PrivateRouteProps): React.JSX.Element {
  return(
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
