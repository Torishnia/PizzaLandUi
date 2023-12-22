import { createAsyncThunk } from '@reduxjs/toolkit';

import { IPizza } from '../../interfaces';
import PizzaService, { IPizzaParams } from '../../services/PizzaService';

// { categoryId: number, search: string, sortOrder: string, sortBy: string }

export const fetchPizzas = createAsyncThunk<IPizza[], IPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => PizzaService.getAllPizzas(params),
);
