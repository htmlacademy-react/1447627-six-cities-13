import {AuthorizationStatus, NameSpace} from '../../const';
import {State} from '../../types';

export const getAutorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

// export const getAutorizationCheckedStatus = (state: State): boolean =>
//   state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
