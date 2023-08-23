import {NameSpace} from '../../const';
import {State} from '../../types';

export const getOfferCommentLoadingStatus = (state: State): boolean =>
  state[NameSpace.OfferComment].isLoading;

export const getOfferCommentSendingStatus = (state: State): boolean =>
  state[NameSpace.OfferComment].isSended;
