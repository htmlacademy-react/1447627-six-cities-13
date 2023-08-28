import {favoriteOffers} from './favorite-offers.slice';
import {fetchFavoriteOffersAction, addOfferToFavorites, removeOfferFromFavorites} from '../api-actions';
import {makeFakeOfferPreviewData} from '../../utils/mocks';

describe('FavoriteOffers Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
    };

    const result = favoriteOffers.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
    };

    const result = favoriteOffers.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array with offers with "fetchFavoriteOffersAction.fullfilled"', () => {
    const mockOfferPreviewData = makeFakeOfferPreviewData();
    const expectedState = {
      offers: [mockOfferPreviewData]
    };

    const result = favoriteOffers.reducer(undefined, fetchFavoriteOffersAction.fulfilled([mockOfferPreviewData], '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array with offers with "addOfferToFavorites.fulfilled"', () => {
    const mockOfferPreviewData = makeFakeOfferPreviewData();
    const initialState = {
      offers: [],
    };
    const expectedState = {
      offers: [mockOfferPreviewData],
    };

    const result = favoriteOffers.reducer(initialState, addOfferToFavorites.fulfilled(mockOfferPreviewData, '', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to empty array with "removeOfferFromFavorites.fulfilled"', () => {
    const mockOfferPreviewData = makeFakeOfferPreviewData();
    const initialState = {
      offers: [mockOfferPreviewData],
    };
    const expectedState = {
      offers: [],
    };

    const result = favoriteOffers.reducer(initialState, removeOfferFromFavorites.fulfilled(mockOfferPreviewData, '', ''));

    expect(result).toEqual(expectedState);
  });
});
