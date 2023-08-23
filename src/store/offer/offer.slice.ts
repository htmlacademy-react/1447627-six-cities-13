import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OfferFullData} from '../../types';
import {fetchOfferAction} from '../api-actions';

type Offer = {
  offer: OfferFullData | null;
  isLoading: boolean;
}

const initialState: Offer = {
  offer: null,
  isLoading: false,
};

export const offer = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isLoading = false;
      });
  }
});
