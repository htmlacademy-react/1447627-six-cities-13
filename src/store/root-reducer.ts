import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {userProcess} from './user-process/user-process.slice';
import {appData} from './app-data/app-data.slice';
import {filterProcess} from './filter-process/filter-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.Filter]: filterProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
