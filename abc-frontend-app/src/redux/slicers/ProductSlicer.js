import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  createStock,
  deleteProduct,
  deleteStock,
  fetchDonatableStocks,
  fetchSingleProduct, fetchProducts,
  updateProduct,
  updateStock
} from "../actions/ProductActions";

export const product = createSlice({
  name: "product",
  initialState: { Products: [], donatableStocks: [], isLoading: false, error: null ,productSelected:false},
  reducers: {
    selectProduct: (state, {payload}) => {

        state.Products = state.Products.map((product) =>
        product._id == payload ? {...product,selected:true} : {...product,selected:false});
    state.productSelected = true;
    },
  },    
  // "map object API"
  extraReducers: {
    [fetchDonatableStocks.pending](state) {
      state.isLoading = "LOADING";
    },
    [fetchDonatableStocks.fulfilled](state, { payload }) {
      state.isLoading = "FULFILLED";
      console.log(payload,'trweewew')
      state.donatableStocks = payload.data.data;
    },
    [fetchDonatableStocks.rejected](state, { payload }) {
      console.log('trweewew')
      state.isLoading = "REJECTED";
      state.error = payload.data.message;
    },
    [fetchProducts.pending](state) {
      state.isLoading = "LOADING";
    },
    [fetchProducts.fulfilled](state, { payload }) {
      state.isLoading = "FULFILLED";
      state.Products = payload.data.data;
    },
    [fetchProducts.rejected](state, { payload }) {
      state.isLoading = "REJECTED";
    },
    [fetchSingleProduct.pending](state) {
      state.isLoading = "LOADING";
    },
    [fetchSingleProduct.fulfilled](state, { payload }) {
      state.isLoading = "FULFILLED";
      state.Products.push(...payload.data.data);
    },
    [fetchSingleProduct.rejected](state, { payload }) {
      state.isLoading = "REJECTED";
    },
    [createProduct.pending](state) {
      state.isLoading = "LOADING";
    },
    [createProduct.fulfilled](state, { payload }) {
      state.isLoading = "FULFILLED";
      state.Products.push(payload.data.data);
    },
    [createProduct.rejected](state, { payload }) {
      console.log(payload, state);
      state.isLoading = "REJECTED";
    },
    [updateProduct.pending](state) {
      console.log(state);
      state.isLoading = "LOADING";
    },
    [updateProduct.fulfilled](state, { payload }) {
      console.log(payload);
      state.isLoading = "FULFILLED";
      state.Products = state.Products.map((product) =>
        product._id == payload.data.data._id ? {...payload.data.data,selected:true} : product
      );
    },
    [updateProduct.rejected](state, { payload }) {
      console.log(state);
      state.isLoading = "REJECTED";
    },

    [deleteProduct.pending](state) {
      console.log(state);
      state.isLoading = "LOADING";
    },
    [deleteProduct.fulfilled](state, { payload }) {
      console.log(payload);
      state.isLoading = "FULFILLED";
      state.Products = state.Products.filter(
        (product) => product._id !== payload.data.data._id
      );
    },
    [deleteProduct.rejected](state, { payload }) {
      console.log(state);
      state.isLoading = "REJECTED";
    },

    [createStock.pending](state) {
      console.log(state);
      state.isLoading = "LOADING";
    },
    [createStock.fulfilled](state, { payload }) {
      console.log(payload);
      state.isLoading = "FULFILLED";
      state.Products
        .find((el) => el._id == payload.data.data.product)
        .stocks.push(payload.data.data);
    },
    [createStock.rejected](state, {payload}) {
      console.log('errrrrrrrrorrrrrrrrr')
      state.isLoading = "REJECTED";
    },

    [updateStock.pending](state) {
      console.log(state);
      state.isLoading = "LOADING";
    },
    [updateStock.fulfilled](state, { payload }) {
      console.log(payload);
      state.isLoading = "FULFILLED";
      state.Products.find(
        (el) => el._id == payload.data.data.product
      ).stocks = state.Products
        .find((el) => el._id == payload.data.data.product)
        .stocks.map((stock) =>
          stock._id == payload.data.data._id ? payload.data.data : stock
        );
    },
    [updateStock.rejected](state, { payload }) {
      console.log(state);
      state.isLoading = "REJECTED";
    },
    [deleteStock.pending](state) {
      console.log(state);
      state.isLoading = "LOADING";
    },
    [deleteStock.fulfilled](state, { payload }) {
      state.isLoading = "FULFILLED";
      let postDelStocks = state.Products
      .find((el) => el._id == payload.data.data.product)
      .stocks.filter((stock) =>
        stock._id !== payload.data.data._id
      );

      state.Products.find(
        (el) => el._id == payload.data.data.product
      ).stocks = postDelStocks;
      console.log(state.Products.find(
        (el) => el._id == payload.data.data.product
      ).stocks);

    },
    [deleteStock.rejected](state, { payload }) {
      console.log(state);
      state.isLoading = "REJECTED";
    },
  },
});
