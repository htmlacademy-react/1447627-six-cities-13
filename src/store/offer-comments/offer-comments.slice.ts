import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ReviewsData} from '../../types';
import {fetchOfferCommentsAction} from '../api-actions';

type OfferComments = {
  comments: ReviewsData;
}

const initialState: OfferComments = {
  comments: [],
};

export const offerComments = createSlice({
  name: NameSpace.OfferComments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});
