import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFilterSliceState, ISort } from '../../interfaces';
import { RootState } from '../store';

const initialState: IFilterSliceState = {
	searchValue: '',
  categoryId: 0,
	sort: {
		sortName: 'popularity',
		sortProperty: 'rating',
	},
}

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action: PayloadAction<number>) {
			state.categoryId = action.payload;
		},
    setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload;
		},
		setSort(state, action: PayloadAction<ISort>) {
			state.sort = action.payload;
		},
    setFilters(state, action: PayloadAction<IFilterSliceState>) {
      state.categoryId = Number(action.payload.categoryId);
      state.sort = action.payload.sort;
    }
	}
})

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;

export const { setCategoryId, setSort, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;