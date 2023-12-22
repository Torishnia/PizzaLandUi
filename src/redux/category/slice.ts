import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ICategory } from '../../interfaces';
import { fetchCategories } from './asyncActions';

const initialState: any = {
  categorySelectedId: null,
  categories: [],
  categoryStatus: 'loading',
}

const categorySlice = createSlice({
  name: 'category',
	initialState,
	reducers: {
    setCategories(state, action: PayloadAction<ICategory[]>) {
      state.categories = action.payload;
    },
    setCategoryId(state, action: PayloadAction<number>) {      
			state.categorySelectedId = action.payload;
		},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.categoryStatus = 'loading';
      state.categories = [];
    })
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categoryStatus = 'success';
      state.categories = action.payload;
    })
    builder.addCase(fetchCategories.rejected, (state) => {
      state.categoryStatus = 'error';
      state.categories = [];
    });
  },
});

export const { setCategories, setCategoryId } = categorySlice.actions;
export default categorySlice.reducer;