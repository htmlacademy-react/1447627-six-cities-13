import {createAction} from '@reduxjs/toolkit';
import {Places} from '../types';
import {AppRoute, AuthorizationStatus, CITIES} from '../const';

export const setFilterCity = createAction<typeof CITIES[number]>('filter/setCity');

export const loadAllPlaces = createAction<Places>('data/loadAllPlaces');

export const setPlacesDataLoadingStatus = createAction<boolean>('data/setPlacesDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('site/redirectToRoute');
