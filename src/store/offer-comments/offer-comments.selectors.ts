import {NameSpace} from '../../const';
import {State, ReviewsData} from '../../types';

export const getOfferComments = (state: State): ReviewsData =>
  state[NameSpace.OfferComments].comments;
