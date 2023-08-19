import {createAction} from '@reduxjs/toolkit';
import {OfferPreviewsData, OfferFullData, ReviewsData} from '../types';
import {AppRoute, AuthorizationStatus, CITIES} from '../const';

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const loadAllOffersData = createAction<OfferPreviewsData>('data/loadAllOffers');

export const setAllOffersDataLoadingStatus = createAction<boolean>('data/setAllOffersLoadingStatus');

export const setFilterCity = createAction<typeof CITIES[number]>('filter/setCity');

export const loadOfferData = createAction<OfferFullData>('data/loadOffer');

export const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferLoadingStatus');

export const loadNearbyOffersData = createAction<OfferPreviewsData>('data/loadNearbyOffers');

export const loadOfferCommentsData = createAction<ReviewsData>('data/loadComments');

export const redirectToRoute = createAction<AppRoute>('site/redirectToRoute');
