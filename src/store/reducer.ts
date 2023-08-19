import {createReducer} from '@reduxjs/toolkit';
import {
  requireAuthorization,
  loadAllOffersData,
  setAllOffersDataLoadingStatus,
  loadNearbyOffersData,
  loadOfferCommentsData,
  setFilterCity,
  loadOfferData,
  setOfferDataLoadingStatus,
} from './action';
import {AuthorizationStatus, CITIES} from '../const';
import {OfferPreviewsData, OfferFullData, ReviewsData} from '../types';

type InitialState = {
  filter: {
    city: string;
  };
  allOffers: OfferPreviewsData;
  isAllOffersDataLoading: boolean;
  nearbyOffers: OfferPreviewsData;
  offer: OfferFullData | null;
  isOfferDataLoading: boolean;
  comments: ReviewsData;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  filter: {
    city: CITIES[0]
  },
  allOffers: [],
  isAllOffersDataLoading: false,
  nearbyOffers: [],
  offer: null,
  isOfferDataLoading: false,
  comments: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadAllOffersData, (state, action) => {
      state.allOffers = action.payload;
    })
    .addCase(setAllOffersDataLoadingStatus, (state, action) => {
      state.isAllOffersDataLoading = action.payload;
    })
    .addCase(setFilterCity, (state, action) => {
      state.filter.city = action.payload;
    })
    .addCase(loadOfferData, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadNearbyOffersData, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadOfferCommentsData, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    });
});

export {reducer};
