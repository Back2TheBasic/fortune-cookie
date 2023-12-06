import { combineReducers, configureStore } from '@reduxjs/toolkit';
import selectReducer from './slice/selectSlice';

const rootReducer = combineReducers({
  select: selectReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
