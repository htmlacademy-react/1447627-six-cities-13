import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';

import {sendOfferComment} from '../api-actions';

type OfferComment = {
  isLoading: boolean;
  isSended: boolean;
}

const initialState: OfferComment = {
  isLoading: false,
  isSended: false,
};

export const offerComment = createSlice({
  name: NameSpace.OfferComment,
  initialState,
  reducers: {
    resetSendedStatus: (state) => {
      state.isSended = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(sendOfferComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendOfferComment.fulfilled, (state) => {
        state.isLoading = false;
        state.isSended = true;
      })
      .addCase(sendOfferComment.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export const {resetSendedStatus} = offerComment.actions;
