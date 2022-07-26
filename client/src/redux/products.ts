import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductsSelectorType } from "../type";

export const initialState = {
  loading: false,
  hasErrors: false,
  products: [],
};

export const getProducts = createAsyncThunk("products/data", async () => {
  const response = await axios.get("http://localhost:5000/api/products");
  return response.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }: any) => {
        state.products = payload;
        state.loading = false;
        state.hasErrors = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
        state.hasErrors = true;
      });
  },
});

export const productsSelector = (state: ProductsSelectorType) => state.products;
export default productsSlice.reducer;
