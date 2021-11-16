import axios from 'axios';
import { returnErrors } from '../errorActions';
import * as actionTypes from './carttypes';

export const addToCart = (itemId) => dispatch => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}

export const deleteFromCart = (userId, itemId) => dispatch => {
    axios.delete(`/api/cart/${userId}/${itemId}`)
        .then(res => dispatch({
            type: DELETE_FROM_CART,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const setCartLoading = () => {
    return {
        type: CART_LOADING
    }
}