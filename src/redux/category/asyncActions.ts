import { createAsyncThunk } from '@reduxjs/toolkit';

import { ICategory } from '../../interfaces';
import CategoryService from '../../services/CategoryService';

export const fetchCategories = createAsyncThunk<ICategory[]>(
  'category/fetchCategoriesStatus',
  async () => CategoryService.getAllCategories(),
);
