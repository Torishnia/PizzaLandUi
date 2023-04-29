import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPizza } from "../../interfaces";

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