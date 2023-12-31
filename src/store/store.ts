import { configureStore } from '@reduxjs/toolkit';
import selectReducer from './slice/selectSlice';
import resultReducer from './slice/resultSlice';
import loadingReducer from './slice/loadingSlice';

const store = configureStore({
  reducer: {
    select: selectReducer,
    result: resultReducer,
    loading: loadingReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
