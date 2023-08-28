import {NameSpace} from '../../const';
import {makeFakeOfferPreviewData} from '../../utils/mocks';
import {getAllOffers, getAllOffersDataLoadingStatus, getAllOffersLoadingErrorStatus} from './catalog.selectors';

describe('Catalog selectors', () => {
  const mockOfferPreviewData = makeFakeOfferPreviewData();
  const state = {
    [NameSpace.Catalog]: {
      offers: [mockOfferPreviewData],
      isLoading: false,
      hasError: false,
    }
  };

  it('should return offers data from state', () => {
    const {offers} = state[NameSpace.Catalog];
    const result = getAllOffers(state);
    expect(result).toEqual(offers);
  });

  it('should return offers data loading status', () => {
    const {isLoading} = state[NameSpace.Catalog];
    const result = getAllOffersDataLoadingStatus(state);
    expect(result).toBe(isLoading);
  });

  it('should return offers loading error status', () => {
    const {hasError} = state[NameSpace.Catalog];
    const result = getAllOffersLoadingErrorStatus(state);
    expect(result).toBe(hasError);
  });
});
