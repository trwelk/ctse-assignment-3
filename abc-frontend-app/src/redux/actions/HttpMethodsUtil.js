import axios from 'axios'
import {  toast } from 'material-react-toastify';

export const get = async (url) => {
    try {
        const response = await axios.get(url);
        return response
    } catch (error) {
        if (!error.response) {
            // network error
            toast.error('Could not connect to the server');
        } else {
            toast.error(error.response.data.error ? error.response.data.error : "An error occured");
        }
        throw error
    }
}

export const put = async (url,data) => {
    try {
        const response = await axios.put(url,data)
        return response
    } catch (error) {
        if (!error.response) {
            // network error
            toast.error('Could not connect to the server');
        } else {
            toast.error(error.response.data.error ? error.response.data.error : "An error occured");
        }
        throw error
    }

}

export const post = async (url,data) => {
    try {
        const response = await axios.post(url,data)
        return response
    } catch (error) {
        if (!error.response) {
            // network error
            
            toast.error(error.response.data.error ? error.response.data.error : "An error occured");
        } else {
            toast.error(error.response.data.error ? error.response.data.error : "An error occured");
        }
        throw error
    }
}

export const deleteEntity = async (url,data) => {
    try {
        const response = await axios.delete(url,data)
        return response
    } catch (error) {
        if (!error.response) {
            console.log(error)
            toast.error(error);
        } else {
            toast.error(error.response.data.error ? error.response.data.error : "An error occured");
        }
        throw error
    }
}

