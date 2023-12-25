import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPizza, IPizzaSliceState } from '../../interfaces';
import { fetchPizzas } from './asyncActions';
import { E_StatusComponent } from '../../enums';

const initialState: IPizzaSliceState = {
  pizzasStatus: E_StatusComponent.LOADING,
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
      state.pizzasStatus = E_StatusComponent.LOADING;
      state.pizzas = [];
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzasStatus = E_StatusComponent.SUCCESS;
      state.pizzas = action.payload;
    })
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.pizzasStatus = E_StatusComponent.ERROR;
      state.pizzas = [];
    });
  },
})

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
