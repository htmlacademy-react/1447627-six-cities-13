import {NameSpace} from '../../const';
import {State, OfferPreviewsData} from '../../types';

export const getNearbyOffers = (state: State): OfferPreviewsData =>
  state[NameSpace.NearbyOffers].offers;
