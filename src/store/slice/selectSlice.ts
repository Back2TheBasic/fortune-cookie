import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TCategory } from '@/types/type';
import type { RootState } from '../store';

const initialState = {
  selectedCategory: '' as TCategory,
};

export const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    SELECT_CATEGORY: (state, action: PayloadAction<TCategory>) => {
      state.selectedCategory = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SELECT_CATEGORY } = selectSlice.actions;

export const selectSelectedCategory = (state: RootState) =>
  state.select.selectedCategory;

export default selectSlice.reducer;
