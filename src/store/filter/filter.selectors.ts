import {NameSpace} from '../../const';
import {State, CityName} from '../../types';

export const getFilterCity = (state: Pick<State, NameSpace.Filter>): CityName =>
  state[NameSpace.Filter].filter.city;
