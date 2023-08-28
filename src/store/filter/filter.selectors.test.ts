import {CITIES, NameSpace} from '../../const';
import {getFilterCity} from './filter.selectors';

describe('Filter selectors', () => {
  it('should return filter city from state', () => {
    const state = {
      [NameSpace.Filter]: {
        filter: {
          city: CITIES[0],
        }
      }
    };
    const city = state[NameSpace.Filter].filter.city;

    const result = getFilterCity(state);
    expect(result).toBe(city);
  });
});
