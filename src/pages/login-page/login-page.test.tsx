import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {withHistory, withStore} from '../../utils/mock-component';
import LoginPage from './login-page';
import {NameSpace, AuthorizationStatus} from '../../const';

describe('Component: LoginPage', () => {
  it('should render correctly', () => {
    const emailText = 'E-mail';
    const passwordText = 'Password';
    const withHistoryComponent = withHistory(<LoginPage />);
    const {withStoreComponent} = withStore(withHistoryComponent , {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
      [NameSpace.FavoriteOffers]: {
        offers: []
      },
    });
    const preparedComponent = withStoreComponent;

    render(preparedComponent);

    expect(screen.getByText(emailText)).toBeInTheDocument();
    expect(screen.getByText(passwordText)).toBeInTheDocument();
  });

  it('should render correctly when user enter email and password', async () => {
    const emailElementTestId = 'emailElement';
    const passwordElementTestId = 'passwordElement';
    const expectedEmailValue = 'Oliver.conner@gmail.com';
    const expectedPasswordValue = 'password1';
    const withHistoryComponent = withHistory(<LoginPage />);
    const {withStoreComponent} = withStore(withHistoryComponent , {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
      [NameSpace.FavoriteOffers]: {
        offers: []
      },
    });
    const preparedComponent = withStoreComponent;

    render(preparedComponent);
    await userEvent.type(
      screen.getByTestId(emailElementTestId),
      expectedEmailValue,
    );
    await userEvent.type(
      screen.getByTestId(passwordElementTestId),
      expectedPasswordValue,
    );

    expect(screen.getByDisplayValue(expectedEmailValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPasswordValue)).toBeInTheDocument();
  });
});
