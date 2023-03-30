import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { IPizza, IPizzaSliceState } from '../../interfaces';
import { RootState } from '../store';

export const fetchPizzas = createAsyncThunk<IPizza[], Record<string, string>>(
  'pizza/fetchPizzasStatus', 
  async (params) => {
    const { baseUrl, category, sortBy, order, search, } = params;
    const { data } = await axios.get<IPizza[]>(
      `${baseUrl}/items?${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data;
  }
)
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

export const selectPizzaData = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;