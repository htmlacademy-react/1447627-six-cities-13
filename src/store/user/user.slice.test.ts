import {user} from './user.slice';
import {AuthorizationStatus} from '../../const';
import {checkAuthorizationAction, loginAction, logoutAction} from '../api-actions';

describe('User Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
    };

    const result = user.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
    };

    const result = user.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "checkAuthorizationAction.fulfilled" action', () => {
    const initialState = { authorizationStatus: AuthorizationStatus.NoAuth };
    const expectedState = { authorizationStatus: AuthorizationStatus.Auth };

    const result = user.reducer(initialState, checkAuthorizationAction.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "checkAuthorizationAction.rejected" action', () => {
    const initialState = { authorizationStatus: AuthorizationStatus.Auth };
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth };

    const result = user.reducer(initialState, checkAuthorizationAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "loginAction.fulfilled" action', () => {
    const initialState = { authorizationStatus: AuthorizationStatus.NoAuth };
    const expectedState = { authorizationStatus: AuthorizationStatus.Auth };

    const result = user.reducer(initialState, loginAction.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "loginAction.rejected" action', () => {
    const initialState = { authorizationStatus: AuthorizationStatus.Auth };
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth };

    const result = user.reducer(initialState, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth", with "logoutAction.fulfilled" action', () => {
    const initialState = { authorizationStatus: AuthorizationStatus.Auth };
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth };

    const result = user.reducer(initialState, logoutAction.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
