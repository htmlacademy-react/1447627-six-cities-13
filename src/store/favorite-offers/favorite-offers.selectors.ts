import {NameSpace} from '../../const';
import {State, OfferPreviewsData} from '../../types';

export const getFavoriteOffers = (state: State): OfferPreviewsData => state[NameSpace.FavoriteOffers].offers;
