import {offer} from './offer.slice';
import {fetchOfferAction} from '../api-actions';
import {makeFakeOfferFullData} from '../../utils/mocks';

describe('Offer Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offer: null,
      isLoading: false,
    };

    const result = offer.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offer: null,
      isLoading: false,
    };

    const result = offer.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true" with "fetchOfferAction.pending"', () => {
    const expectedState = {
      offer: null,
      isLoading: true,
    };

    const result = offer.reducer(undefined, fetchOfferAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offer" to offer, "isLoading" to "false" with "fetchOfferAction.fullfilled"', () => {
    const mockOfferFullData = makeFakeOfferFullData();
    const expectedState = {
      offer: mockOfferFullData,
      isLoading: false,
    };

    const result = offer.reducer(undefined, fetchOfferAction.fulfilled(mockOfferFullData, '', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "false" with "fetchOfferAction.rejected"', () => {
    const expectedState = {
      offer: null,
      isLoading: false,
    };

    const result = offer.reducer(undefined, fetchOfferAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
