import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { AppConstants } from '../../util/AppConstants'
import {  toast } from 'material-react-toastify';
import { deleteEntity, get, post, put } from './HttpMethodsUtil';




export const fetchOrders = createAsyncThunk(
    'order/fetchOrders',
    async () => {
        const response = get(AppConstants.REST_URL_HOST + AppConstants.ORDER_URL)
        return response;
    }
) 


export const updateOrder = createAsyncThunk(
    'order/updateOrder',
    async (order) => {
        const response = put(AppConstants.REST_URL_HOST + AppConstants.ORDER_URL + '/' + order.id, order);
        return response;
    }
) 

export const createOrder = createAsyncThunk(
    'order/createorder',
    async ( order , {rejectWithValue} ) => {

        const response = post(AppConstants.REST_URL_HOST + AppConstants.ORDER_URL, order )

        return response;
    }
) 

export const deleteOrder = createAsyncThunk(
    'Order/deleteorder',
    async ( order ) => {
        console.log(order)
        const response = deleteEntity(AppConstants.REST_URL_HOST + AppConstants.ORDER_URL + '/' + order.id);
        return response;
    }
) 


export const validateInvItemObj = (data) => {
    if (data.id == null || data.id == "") {
        return "Field id Cannot be empty"
    }
    else if (data.location == null || data.location == "") {
        return "Field location Cannot be empty"
    }
    else if (data.order == null || data.order == "") {
        return "Field order Date Cannot be empty"
    }
    else if (data.quantity == null || data.quantity == "") {
        return "Field quantity Exp Date Cannot be empty"
    }
    else
        return null;
}