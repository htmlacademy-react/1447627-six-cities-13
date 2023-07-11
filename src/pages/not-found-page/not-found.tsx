import React from 'react';

function NotFoundPage(): React.JSX.Element {
  return(
    <div className="page page--gray page--404">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--404">
        <div className="page__not-found not-found container">
          <b className="not-found__heading">404 Not Found</b>
          <a className="not-found__button button button--primary" href="main.html">Вернуться на главную</a>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
