import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CITIES, NameSpace} from '../../const';
import {FilterProcess, CityName} from '../../types';

const initialState: FilterProcess = {
  filter: {
    city: CITIES[0]
  },
};

export const filterProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setFilterCity: (state, action: PayloadAction<CityName>) => {
      state.filter.city = action.payload;
    }
  },
});

export const {setFilterCity} = filterProcess.actions;
