import {NameSpace} from '../../const';
import {State, OfferPreviewsData} from '../../types';

export const getFavoriteOffers = (state: Pick<State, NameSpace.FavoriteOffers>): OfferPreviewsData =>
  state[NameSpace.FavoriteOffers].offers;
