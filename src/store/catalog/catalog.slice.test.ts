import {catalog} from './catalog.slice';
import {fetchAllOffersAction} from '../api-actions';
import {makeFakeOfferPreviewData} from '../../utils/mocks';

describe('Catalog Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
      isLoading: false,
      hasError: false,
    };

    const result = catalog.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
      isLoading: false,
      hasError: false,
    };

    const result = catalog.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "true", "hasError" to "false" with "fetchAllOffersAction.pending"', () => {
    const expectedState = {
      offers: [],
      isLoading: true,
      hasError: false,
    };

    const result = catalog.reducer(undefined, fetchAllOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array with offers, "isLoading" to "false" with "fetchAllOffersAction.fullfilled"', () => {
    const mockOfferPreviewData = makeFakeOfferPreviewData();
    const expectedState = {
      offers: [mockOfferPreviewData],
      isLoading: false,
      hasError: false,
    };

    const result = catalog.reducer(undefined, fetchAllOffersAction.fulfilled([mockOfferPreviewData], '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "isLoading" to "false", "hasError" to "true" with "fetchAllOffersAction.rejected"', () => {
    const expectedState = {
      offers: [],
      isLoading: false,
      hasError: true,
    };

    const result = catalog.reducer(undefined, fetchAllOffersAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
