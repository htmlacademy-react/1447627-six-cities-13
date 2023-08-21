import {NameSpace} from '../../const';
import {State, OfferFullData, OfferPreviewsData, ReviewsData} from '../../types';

export const getAllOffers = (state: State): OfferPreviewsData => state[NameSpace.Data].allOffers;

export const getAllOffersDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Data].isAllOffersDataLoading;

export const getAllOffersLoadingErrorStatus = (state: State): boolean =>
  state[NameSpace.Data].hasAllOffersError;

export const getOffer = (state: State): OfferFullData | null => state[NameSpace.Data].offer;

export const getOfferDataLoadingStatus = (state: State): boolean =>
  state[NameSpace.Data].isOfferDataLoading;

export const getNearbyOffers = (state: State): OfferPreviewsData => state[NameSpace.Data].nearbyOffers;

export const getOfferComments = (state: State): ReviewsData => state[NameSpace.Data].comments;
