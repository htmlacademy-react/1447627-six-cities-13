import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OfferPreviewsData} from '../../types';
import {
  fetchFavoriteOffersAction,
  addOfferToFavorites,
  removeOfferFromFavorites,
} from '../api-actions';

type FavoriteOffers = {
  offers: OfferPreviewsData;
}

const initialState: FavoriteOffers = {
  offers: [],
};

export const favoriteOffers = createSlice({
  name: NameSpace.FavoriteOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(addOfferToFavorites.fulfilled, (state, action) => {
        state.offers.push(action.payload);
      })
      .addCase(removeOfferFromFavorites.fulfilled, (state, action) => {
        state.offers.splice(
          state.offers.findIndex((offer) => offer.id === action.payload.id),
          1
        );
      });
  }
});
