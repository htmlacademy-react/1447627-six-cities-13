import React from 'react';
import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import useAppSelector from '../../hooks/use-app-selector';

type PrivateRouteProps = {
  children: React.JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): React.JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return(
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to="/login"/>
  );
}

export default PrivateRoute;
