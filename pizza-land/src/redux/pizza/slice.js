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
  items: [],
  status: 'loading',
}

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action) {
      state.items = action.payload;
    }
	},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    })
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    })
  },
})

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;