import { createSlice } from "@reduxjs/toolkit";
import {
  createOrder,
  deleteOrder,
  fetchOrders,
  updateOrder,
} from "../actions/OrderHandlingAction";

export const order = createSlice({
  name: "Order",
  initialState: { orders: [], donatableStocks: [], isLoading: false, error: null ,OrderSelected:false},
  // "map object API"
  extraReducers: {
    [fetchOrders.pending](state) {
      state.isLoading = "LOADING";
    },
    [fetchOrders.fulfilled](state, { payload }) {
      state.isLoading = "FULFILLED";
      state.orders = payload.data.data;
    },
    [fetchOrders.rejected](state, { payload }) {
      state.isLoading = "REJECTED";
    },
    [createOrder.pending](state) {
      state.isLoading = "LOADING";
    },
    [createOrder.fulfilled](state, { payload }) {
      state.isLoading = "FULFILLED";
      state.orders.push(payload.data.data);
    },
    [createOrder.rejected](state, { payload }) {
      console.log(payload, state);
      state.isLoading = "REJECTED";
    },
    [updateOrder.pending](state) {
      console.log(state);
      state.isLoading = "LOADING";
    },
    [updateOrder.fulfilled](state, { payload }) {
      console.log(payload);
      state.isLoading = "FULFILLED";
      state.orders = state.orders.map((Order) =>
        Order._id == payload.data.data._id ? {...payload.data.data,selected:true} : Order
      );
    },
    [updateOrder.rejected](state, { payload }) {
      console.log(state);
      state.isLoading = "REJECTED";
    },

    [deleteOrder.pending](state) {
      console.log(state);
      state.isLoading = "LOADING";
    },
    [deleteOrder.fulfilled](state, { payload }) {
      console.log(payload);
      state.isLoading = "FULFILLED";
      state.orders = state.orders.filter(
        (Order) => Order._id !== payload.data.data._id
      );
    },
    [deleteOrder.rejected](state, { payload }) {
      console.log(state);
      state.isLoading = "REJECTED";
    }
  },
});
