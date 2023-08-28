import {NameSpace} from '../../const';
import {State, OfferPreviewsData} from '../../types';

export const getAllOffers = (state: Pick<State, NameSpace.Catalog>): OfferPreviewsData =>
  state[NameSpace.Catalog].offers;

export const getAllOffersDataLoadingStatus = (state: Pick<State, NameSpace.Catalog>): boolean =>
  state[NameSpace.Catalog].isLoading;

export const getAllOffersLoadingErrorStatus = (state: Pick<State, NameSpace.Catalog>): boolean =>
  state[NameSpace.Catalog].hasError;
