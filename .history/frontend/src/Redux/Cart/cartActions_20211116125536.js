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

export const deleteFromCart = (itemId)=> {
    return {
        type: actionTypes.DELETE_FROM_CART,
        payload: {
            id:itemId
        }
    }
}

export const getQty = (itemI) => {
    return {
        type: CART_LOADING
    }
}