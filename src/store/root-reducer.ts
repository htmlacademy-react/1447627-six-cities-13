import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {user} from './user/user.slice';
import {filter} from './filter/filter.slice';
import {offerComments} from './offer-comments/offer-comments.slice';
import {favoriteOffers} from './favorite-offers/favorite-offers.slice';
import {nearbyOffers} from './nearby-offers/nearby-offers.slice';
import {offer} from './offer/offer.slice';
import {catalog} from './catalog/catalog.slice';

export const rootReducer = combineReducers({
  [NameSpace.Filter]: filter.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.OfferComments]: offerComments.reducer,
  [NameSpace.FavoriteOffers]: favoriteOffers.reducer,
  [NameSpace.NearbyOffers]: nearbyOffers.reducer,
  [NameSpace.Offer]: offer.reducer,
  [NameSpace.Catalog]: catalog.reducer,
});
