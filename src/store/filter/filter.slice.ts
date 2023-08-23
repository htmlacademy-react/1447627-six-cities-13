import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CITIES, NameSpace} from '../../const';
import {CityName} from '../../types';

type Filter = {
  filter: {
    city: string;
  };
}

const initialState: Filter = {
  filter: {
    city: CITIES[0]
  },
};

export const filter = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setFilterCity: (state, action: PayloadAction<CityName>) => {
      state.filter.city = action.payload;
    }
  },
});

export const {setFilterCity} = filter.actions;
