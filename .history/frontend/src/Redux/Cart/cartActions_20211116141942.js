addToCart
import * as actionTypes from './carttypes';

export const  = (itemID) => dispatch => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const deleteFromCart = (itemID) => {
    return {
        type: actionTypes.DELETE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const getQty = (itemID, value) => {
    return {
        type: actionTypes.CART_QUANTITY,
        payload: {
            id: itemID,
            qty: value,
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.CART_LOADING,
        payload: item,
    }
}