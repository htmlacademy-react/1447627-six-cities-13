import {NameSpace} from '../../const';
import {State, OfferFullData} from '../../types';

export const getOffer = (state: Pick<State, NameSpace.Offer>): OfferFullData | null =>
  state[NameSpace.Offer].offer;

export const getOfferDataLoadingStatus = (state: Pick<State, NameSpace.Offer>): boolean =>
  state[NameSpace.Offer].isLoading;
