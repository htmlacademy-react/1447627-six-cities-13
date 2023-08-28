import {AuthorizationStatus, NameSpace} from '../../const';
import {State} from '../../types';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
