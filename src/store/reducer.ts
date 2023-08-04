import {createReducer} from '@reduxjs/toolkit';
import {setFilterCity, getPlaces} from './action';
import {CITIES} from '../const';
import places from '../mocks/places';
import {Place} from '../types';

const initialState: {
  filter: {
    city: string;
  };
  places: Place[];
} = {
  filter: {
    city: CITIES[0]
  },
  places: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilterCity, (state, action) => {
      state.filter.city = action.payload;
    })
    .addCase(getPlaces, (state) => {
      state.places = places;
    });
});

export {reducer};
