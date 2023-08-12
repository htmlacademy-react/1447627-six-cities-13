import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Logo from '../logo';
import {AuthorizationStatus} from '../../const';
import useAppSelector from '../../hooks/use-app-selector';
import useAppDispatch from '../../hooks/use-app-dispatch';
import {logoutAction} from '../../store/api-actions';

function Header(): React.JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const location = useLocation();
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo additionalClassName="header__logo" disabled={location.pathname === '/'}/>
          </div>
          {location.pathname !== '/login' ? (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/favorites"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {authorizationStatus === AuthorizationStatus.Auth ? (
                      <>
                        <span className="header__user-name user__name">
                          Oliver.conner@gmail.com
                        </span>
                        <span className="header__favorite-count">3</span>
                      </>
                    ) : (
                      <span className="header__login">Sign in</span>
                    )}
                  </Link>
                </li>
                {authorizationStatus === AuthorizationStatus.Auth ? (
                  <li className="header__nav-item">
                    <Link
                      onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(logoutAction());
                      }}
                      className="header__nav-link"
                      to='/'
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                ) : null}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
