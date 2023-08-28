import {nearbyOffers} from './nearby-offers.slice';
import {fetchNearbyOffersAction} from '../api-actions';
import {makeFakeOfferPreviewData} from '../../utils/mocks';

describe('NearbyOffers Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
    };

    const result = nearbyOffers.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
    };

    const result = nearbyOffers.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array with offers with "fetchNearbyOffersAction.fullfilled"', () => {
    const mockOfferPreviewData = makeFakeOfferPreviewData();
    const expectedState = {
      offers: [mockOfferPreviewData]
    };

    const result = nearbyOffers.reducer(undefined, fetchNearbyOffersAction.fulfilled([mockOfferPreviewData], '', ''));

    expect(result).toEqual(expectedState);
  });
});
