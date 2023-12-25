import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ICategory } from '../../interfaces';
import { fetchCategories } from './asyncActions';
import { E_StatusComponent } from '../../enums';

const initialState: any = {
  categorySelectedId: null,
  categories: [],
  categoryStatus: E_StatusComponent.LOADING,
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
      state.categoryStatus = E_StatusComponent.LOADING;
      state.categories = [];
    })
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categoryStatus = E_StatusComponent.SUCCESS;
      state.categories = action.payload;
    })
    builder.addCase(fetchCategories.rejected, (state) => {
      state.categoryStatus = E_StatusComponent.ERROR;
      state.categories = [];
    });
  },
});

export const { setCategories, setCategoryId } = categorySlice.actions;
export default categorySlice.reducer;