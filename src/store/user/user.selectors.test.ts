import {AuthorizationStatus, NameSpace} from '../../const';
import {getAuthorizationStatus} from './user.selectors';

describe('User selectors', () => {
  it('should return authorization status from state', () => {
    const authorizationStatus = AuthorizationStatus.Auth;
    const state = {
      [NameSpace.User]: {
        authorizationStatus,
      }
    };

    const result = getAuthorizationStatus(state);
    expect(result).toBe(authorizationStatus);
  });
});
