import {NameSpace} from '../../const';
import {State, OfferPreviewsData} from '../../types';

export const getNearbyOffers = (state: Pick<State, NameSpace.NearbyOffers>): OfferPreviewsData =>
  state[NameSpace.NearbyOffers].offers;
