import {NameSpace} from '../../const';
import {makeFakeOfferPreviewData} from '../../utils/mocks';
import {getNearbyOffers} from './nearby-offers.selectors';

describe('NearbyOffers selectors', () => {
  const mockOfferPreviewData = makeFakeOfferPreviewData();
  const state = {
    [NameSpace.NearbyOffers]: {
      offers: [mockOfferPreviewData],
    }
  };

  it('should return offers data from state', () => {
    const {offers} = state[NameSpace.NearbyOffers];
    const result = getNearbyOffers(state);
    expect(result).toEqual(offers);
  });
});
