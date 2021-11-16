import axios from 'axios';
import { returnErrors } from '../errorActions';
import * as actionTypes from './carttypes';

export const addToCart = (itemID) => dispatch => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const deleteFromCart = (itemID)=> {
    return {
        type: actionTypes.DELETE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const getQty = (itemID, value) => {
    return {
        type: CART_LOADING
    }
}