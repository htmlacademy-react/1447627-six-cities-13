import {CITIES} from '../../const';
import {filter, setFilterCity} from './filter.slice';

describe('Filter Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {filter: {city: CITIES[0]}};

    const result = filter.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {filter: {city: CITIES[0]}};

    const result = filter.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "city" to city with "setFilterCity" action', () => {
    const initialState = {filter: {city: CITIES[0]}};
    const expectedCity = CITIES[3];

    const result = filter.reducer(initialState, setFilterCity(CITIES[3]));

    expect(result.filter.city).toBe(expectedCity);
  });
});
