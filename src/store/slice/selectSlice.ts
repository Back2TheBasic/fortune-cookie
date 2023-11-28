import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SelectState {
  selectedCategory: string;
}

const initialState: SelectState = {
  selectedCategory: '',
};

export const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    SELECT_CATEGORY: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SELECT_CATEGORY } = selectSlice.actions;

export const selectSelectedCategory = (state) => state.select.selectedCategory;

export default selectSlice.reducer;
