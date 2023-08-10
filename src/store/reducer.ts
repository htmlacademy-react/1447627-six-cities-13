import {createReducer} from '@reduxjs/toolkit';
import {setFilterCity, loadAllPlaces, setPlacesDataLoadingStatus} from './action';
import {CITIES} from '../const';
import {Place} from '../types';

const initialState: {
  filter: {
    city: string;
  };
  places: Place[];
  isPlacesDataLoading: boolean;
} = {
  filter: {
    city: CITIES[0]
  },
  places: [],
  isPlacesDataLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilterCity, (state, action) => {
      state.filter.city = action.payload;
    })
    .addCase(loadAllPlaces , (state, action) => {
      state.places = action.payload;
    })
    .addCase(setPlacesDataLoadingStatus, (state, action) => {
      state.isPlacesDataLoading = action.payload;
    });
});

export {reducer};
