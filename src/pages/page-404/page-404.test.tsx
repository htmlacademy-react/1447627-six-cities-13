import Page404 from './page-404';
import {withHistory, withStore} from '../../utils/mock-component';
import {render, screen} from '@testing-library/react';
import {NameSpace, AuthorizationStatus} from '../../const';

describe('Component: Page404', () => {
  it('should render correctly', () => {
    const expectedHeaderText = '404 Not Found';
    const expectedLinkText = 'Go back to the main page';
    const withHistoryComponent = withHistory(<Page404 />);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
      [NameSpace.FavoriteOffers]: {
        offers: []
      },
    });
    const preparedComponent = withStoreComponent;

    render(preparedComponent);

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});
