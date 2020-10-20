import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import cells from './slices.js/cells';
const reducer = combineReducers({
  // here we will be adding reducers
  cells: cells,
})
const store = configureStore({
  reducer,
})
export default store;