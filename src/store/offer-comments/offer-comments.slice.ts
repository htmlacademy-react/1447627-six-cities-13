import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ReviewsData} from '../../types';
import {fetchOfferCommentsAction, sendOfferComment} from '../api-actions';

type OfferComments = {
  comments: ReviewsData;
  commentIsSending: boolean;
  commentIsSended: boolean;
}

const initialState: OfferComments = {
  comments: [],
  commentIsSending: false,
  commentIsSended: false,
};

export const offerComments = createSlice({
  name: NameSpace.OfferComments,
  initialState,
  reducers: {
    resetCommentSendedStatus: (state) => {
      state.commentIsSended = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(sendOfferComment.pending, (state) => {
        state.commentIsSending = true;
      })
      .addCase(sendOfferComment.fulfilled, (state, action) => {
        state.commentIsSending = false;
        state.commentIsSended = true;
        state.comments.push(action.payload);
      })
      .addCase(sendOfferComment.rejected, (state) => {
        state.commentIsSending = false;
      });
  }
});

export const {resetCommentSendedStatus} = offerComments.actions;
