import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPizza, IPizzaSliceState } from '../../interfaces';
import { fetchPizzas } from './asyncActions';

const initialState: IPizzaSliceState = {
  products: [],
  status: 'loading',
}

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<IPizza[]>) {
      state.products = action.payload;
    }
	},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading';
      state.products = [];
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = 'success';
      state.products = action.payload;
    })
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error';
      state.products = [];
    })
  },
})

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;