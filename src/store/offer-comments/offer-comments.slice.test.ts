import {offerComments, resetCommentSendedStatus} from './offer-comments.slice';
import {makeFakeOfferReviewData} from '../../utils/mocks';
import {fetchOfferCommentsAction, sendOfferComment} from '../api-actions';

describe('OfferComments Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      comments: [],
      commentIsSending: false,
      commentIsSended: false,
    };

    const result = offerComments.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      comments: [],
      commentIsSending: false,
      commentIsSended: false,
    };

    const result = offerComments.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "comments" to array with comments with "fetchOfferCommentsAction.fullfilled"', () => {
    const mockOfferReviewData = makeFakeOfferReviewData();
    const expectedState = {
      comments: [mockOfferReviewData],
      commentIsSending: false,
      commentIsSended: false,
    };

    const result = offerComments.reducer(undefined, fetchOfferCommentsAction.fulfilled([mockOfferReviewData], '', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "commentIsSending" to "true" with "sendOfferComment.pending"', () => {
    const expectedState = {
      comments: [],
      commentIsSending: true,
      commentIsSended: false,
    };

    const result = offerComments.reducer(undefined, sendOfferComment.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "comments" to array with comments, "commentIsSending" to "false", "commmentIsSended" to "true" with "sendOfferComment.fulfilled"', () => {
    const mockOfferReviewData = makeFakeOfferReviewData();
    const expectedState = {
      comments: [mockOfferReviewData],
      commentIsSending: false,
      commentIsSended: true,
    };

    const data = {
      reviewContent: {
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        rating: 4
      },
      offerId: 'offerId'
    };

    const result = offerComments.reducer(undefined, sendOfferComment.fulfilled(mockOfferReviewData, '', data));

    expect(result).toEqual(expectedState);
  });

  it('should set "commentIsSending" to "false" with "sendOfferComment.rejected"', () => {
    const expectedState = {
      comments: [],
      commentIsSending: false,
      commentIsSended: false,
    };

    const result = offerComments.reducer(undefined, sendOfferComment.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "commentIsSended" to "false" with "resetCommentSendedStatus" action', () => {
    const mockOfferReviewData = makeFakeOfferReviewData();
    const initialState = {
      comments: [mockOfferReviewData],
      commentIsSending: false,
      commentIsSended: true,
    };
    const expectedState = {
      comments: [mockOfferReviewData],
      commentIsSending: false,
      commentIsSended: false,
    };

    const result = offerComments.reducer(initialState, resetCommentSendedStatus);

    expect(result).toEqual(expectedState);
  });
});
