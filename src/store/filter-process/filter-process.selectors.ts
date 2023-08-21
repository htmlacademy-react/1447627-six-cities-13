import {NameSpace} from '../../const';
import {State, CityName} from '../../types';

export const getFilterCity = (state: State): CityName =>
  state[NameSpace.Filter].filter.city;
