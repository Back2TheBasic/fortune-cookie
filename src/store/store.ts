import { configureStore } from '@reduxjs/toolkit';
import selectReducer from './slice/selectSlice';

const store = configureStore({
  reducer: { select: selectReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
