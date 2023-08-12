import {createReducer} from '@reduxjs/toolkit';
import {
  setFilterCity,
  loadAllPlaces,
  setPlacesDataLoadingStatus,
  requireAuthorization
} from './action';
import {AuthorizationStatus, CITIES} from '../const';
import {Place} from '../types';

type InitialState = {
  filter: {
    city: string;
  };
  places: Place[];
  isPlacesDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  filter: {
    city: CITIES[0]
  },
  places: [],
  isPlacesDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
