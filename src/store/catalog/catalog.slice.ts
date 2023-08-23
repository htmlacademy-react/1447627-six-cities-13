import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OfferPreviewsData} from '../../types';
import {fetchAllOffersAction} from '../api-actions';

type Catalog = {
  offers: OfferPreviewsData;
  isLoading: boolean;
  hasError: boolean;
}

const initialState: Catalog = {
  offers: [],
  isLoading: false,
  hasError: false,
};

export const catalog = createSlice({
  name: NameSpace.Catalog,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllOffersAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchAllOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllOffersAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  }
});
