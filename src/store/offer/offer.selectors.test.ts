import {NameSpace} from '../../const';
import {makeFakeOfferFullData} from '../../utils/mocks';
import {getOffer, getOfferDataLoadingStatus} from './offer.selectors';

describe('Offer selectors', () => {
  const mockOfferFullData = makeFakeOfferFullData();
  const state = {
    [NameSpace.Offer]: {
      offer: mockOfferFullData,
      isLoading: false,
    }
  };

  it('should return offer data from state', () => {
    const {offer} = state[NameSpace.Offer];
    const result = getOffer(state);
    expect(result).toEqual(offer);
  });

  it('should return offer data loading status', () => {
    const {isLoading} = state[NameSpace.Offer];
    const result = getOfferDataLoadingStatus(state);
    expect(result).toBe(isLoading);
  });
});
