import {NameSpace} from '../../const';
import {State, ReviewsData} from '../../types';

export const getOfferComments = (state: Pick<State, NameSpace.OfferComments>): ReviewsData =>
  state[NameSpace.OfferComments].comments;

export const getOfferCommentSendingStatus = (state: Pick<State, NameSpace.OfferComments>): boolean =>
  state[NameSpace.OfferComments].commentIsSending;

export const getOfferCommentSendedStatus = (state: Pick<State, NameSpace.OfferComments>): boolean =>
  state[NameSpace.OfferComments].commentIsSended;
