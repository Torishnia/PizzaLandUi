import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { IPizza, IPizzaSliceState } from '../../interfaces';
import { IPizza } from '../../interfaces';
import { fetchPizzas } from './asyncActions';

const initialState: any = {
  pizzasStatus: 'loading',
  pizzas: [],
}

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<IPizza[]>) {
      state.pizzas = action.payload;
    }
	},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.pizzasStatus = 'loading';
      state.pizzas = [];
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzasStatus = 'success';
      state.pizzas = action.payload;
    })
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.pizzasStatus = 'error';
      state.pizzas = [];
    });
  },
})

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;