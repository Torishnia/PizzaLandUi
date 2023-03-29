import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  const { baseUrl, category, sortBy, order, search, } = params;
  const { data } = await axios.get(
    `${baseUrl}/items?${category}&sortBy=${sortBy}&order=${order}${search}`,
  );
  return data;
})
const initialState = {
  products: [],
  status: 'loading',
}

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action) {
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

export const selectPizzaData = (state) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;