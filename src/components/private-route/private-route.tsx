import React from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import useAppSelector from '../../hooks/use-app-selector';
import {getAutorizationStatus} from '../../store/user-process/user-process.selectors';

type PrivateRouteProps = {
  children: React.JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): React.JSX.Element {
  const authorizationStatus = useAppSelector(getAutorizationStatus);

  return(
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
