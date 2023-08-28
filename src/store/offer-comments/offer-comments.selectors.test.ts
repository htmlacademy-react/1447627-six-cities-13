import {NameSpace} from '../../const';
import {makeFakeOfferReviewData} from '../../utils/mocks';
import {getOfferComments} from './offer-comments.selectors';

describe('OfferComments selectors', () => {
  const mockOfferReviewData = makeFakeOfferReviewData();
  const state = {
    [NameSpace.OfferComments]: {
      comments: [mockOfferReviewData],
    }
  };

  it('should return comments data from state', () => {
    const {comments} = state[NameSpace.OfferComments];
    const result = getOfferComments(state);
    expect(result).toEqual(comments);
  });
});
