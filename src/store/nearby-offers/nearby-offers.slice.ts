import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OfferPreviewsData} from '../../types';
import {fetchNearbyOffersAction} from '../api-actions';

type NearbyOffers = {
  offers: OfferPreviewsData;
}

const initialState: NearbyOffers = {
  offers: [],
};

export const nearbyOffers = createSlice({
  name: NameSpace.NearbyOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
      });
  }
});
