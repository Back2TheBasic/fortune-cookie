import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const initialState = {
  fortune: '',
};

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    SAVE_RESULT: (state, action: PayloadAction<string>) => {
      state.fortune = action.payload;
    },
  },
});

export const { SAVE_RESULT } = resultSlice.actions;

export const selectResult = (state: RootState) => state.result.fortune;

export default resultSlice.reducer;
