import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DataError from './data-error';
import {withStore} from '../../utils/mock-component';
import {fetchAllOffersAction} from '../../store/api-actions';
import {extractActionsTypes} from '../../utils/mocks';
import {APIRoute} from '../../const';

describe('Component: DataError', () => {
  it('should render correctly', () => {
    const expectedText = 'Failed to load data';
    const { withStoreComponent } = withStore(<DataError action={fetchAllOffersAction} />, {});

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should dispatch "fetchAllOffersAction" when user clicked replay button', async () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(<DataError action={fetchAllOffersAction} />, {});
    mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, []);

    render(withStoreComponent);
    await userEvent.click(screen.getByRole('button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      fetchAllOffersAction.pending.type,
      fetchAllOffersAction.fulfilled.type,
    ]);
  });
});
