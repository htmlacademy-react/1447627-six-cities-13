import {NameSpace} from '../../const';
import {State, OfferFullData} from '../../types';

export const getOffer = (state: State): OfferFullData | null =>
  state[NameSpace.Offer].offer;

export const getOfferDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Offer].isLoading;
