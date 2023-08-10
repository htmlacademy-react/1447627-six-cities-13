import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State, Places} from '../types';
import {loadAllPlaces, setPlacesDataLoadingStatus} from './action';
import {APIRoute} from '../const';

export const fetchAllPlacesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchAllPlaces',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setPlacesDataLoadingStatus(true));
    const {data} = await api.get<Places>(APIRoute.Places);
    dispatch(setPlacesDataLoadingStatus(false));
    dispatch(loadAllPlaces(data));
  },
);
