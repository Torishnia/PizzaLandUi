import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import cart from './cart/slice';
import pizza from './pizza/slice';
import category from './category/slice';

export const store = configureStore({
  reducer: {
    cart,
    pizza,
    category,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();