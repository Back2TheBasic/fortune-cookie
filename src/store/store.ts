import { configureStore } from '@reduxjs/toolkit';
import selectReducer from './slice/selectSlice';
import loadingReducer from './slice/loadingSlice';

const store = configureStore({
  reducer: { select: selectReducer, loading: loadingReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
