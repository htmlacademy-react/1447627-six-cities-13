import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {AppData} from '../../types';
import {
  fetchAllOffersAction,
  fetchNearbyOffersAction,
  fetchOfferAction,
  fetchOfferCommentsAction
} from '../api-actions';

const initialState: AppData = {
  allOffers: [],
  isAllOffersDataLoading: false,
  nearbyOffers: [],
  offer: null,
  isOfferDataLoading: false,
  comments: [],
  hasAllOffersError: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllOffersAction.pending, (state) => {
        state.isAllOffersDataLoading = true;
        state.hasAllOffersError = false;
      })
      .addCase(fetchAllOffersAction.fulfilled, (state, action) => {
        state.allOffers = action.payload;
        state.isAllOffersDataLoading = false;
      })
      .addCase(fetchAllOffersAction.rejected, (state) => {
        state.isAllOffersDataLoading = false;
        state.hasAllOffersError = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferDataLoading = false;
      })
      .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});
