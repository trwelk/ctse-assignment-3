import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { AppConstants } from '../../util/AppConstants'
import {  toast } from 'material-react-toastify';
import { deleteEntity, get, post, put } from './HttpMethodsUtil';


export const onProductSelect = createAction('product/selectProduct')

export const fetchDonatableStocks = createAsyncThunk(
    'products/fetchDonatableStocks',
    async () => {
        const response = get(AppConstants.REST_URL_HOST + AppConstants.DONATABLE_STOCKS_URL)
        return response;
    }
) 

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = get(AppConstants.REST_URL_HOST + AppConstants.PRODUCT_URL)
        return response;
    }
) 

export const fetchSingleProduct = createAsyncThunk(
    'products/fetchSingleProduct',
    async (productId) => {
        const response =  get(AppConstants.REST_URL_HOST + AppConstants.PRODUCT_URL + '/' + productId)
        return response;
    }
) 

export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async (product) => {
        const response = put(AppConstants.REST_URL_HOST + AppConstants.PRODUCT_URL + '/' + product.id, product);
        return response;
    }
) 

export const createProduct = createAsyncThunk(
    'products/createProduct',
    async ( product , {rejectWithValue} ) => {

        const response = post(AppConstants.REST_URL_HOST + AppConstants.PRODUCT_URL, product )

        return response;
    }
) 

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async ( product ) => {
        console.log(product)
        const response = deleteEntity(AppConstants.REST_URL_HOST + AppConstants.PRODUCT_URL + '/' + product.id);
        return response;
    }
) 


export const createStock = createAsyncThunk(
    'products/createStock',
    async ( Stock ) => {
         const response = post(AppConstants.REST_URL_HOST + AppConstants.STOCK_URL, Stock )
         return response
    }
) 

export const updateStock = createAsyncThunk(
    'products/updateStock',
    async ( Stock ) => {
        const response =  put(AppConstants.REST_URL_HOST + AppConstants.STOCK_URL + "/" + Stock.id, Stock)
        return response;
    }
) 

export const deleteStock = createAsyncThunk(
    'products/deleteStock',
    async ( Stock ) => {
        const response =  deleteEntity(AppConstants.REST_URL_HOST + AppConstants.STOCK_URL + '/' + Stock.id)
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
    else if (data.product == null || data.product == "") {
        return "Field product Date Cannot be empty"
    }
    else if (data.quantity == null || data.quantity == "") {
        return "Field quantity Exp Date Cannot be empty"
    }
    else
        return null;
}