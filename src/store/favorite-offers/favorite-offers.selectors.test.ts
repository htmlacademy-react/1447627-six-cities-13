import {NameSpace} from '../../const';
import {makeFakeOfferPreviewData} from '../../utils/mocks';
import {getFavoriteOffers} from './favorite-offers.selectors';

describe('FavoriteOffers selectors', () => {
  const mockOfferPreviewData = makeFakeOfferPreviewData();
  const state = {
    [NameSpace.FavoriteOffers]: {
      offers: [mockOfferPreviewData],
    }
  };

  it('should return offers data from state', () => {
    const {offers} = state[NameSpace.FavoriteOffers];
    const result = getFavoriteOffers(state);
    expect(result).toEqual(offers);
  });
});
