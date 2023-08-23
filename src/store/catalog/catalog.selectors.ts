import {NameSpace} from '../../const';
import {State, OfferPreviewsData} from '../../types';

export const getAllOffers = (state: State): OfferPreviewsData =>
  state[NameSpace.Catalog].offers;

export const getAllOffersDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Catalog].isLoading;

export const getAllOffersLoadingErrorStatus = (state: State): boolean =>
  state[NameSpace.Catalog].hasError;
