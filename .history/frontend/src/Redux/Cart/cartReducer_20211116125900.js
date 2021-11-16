import * as actionTypes from './carttypes';
const cart
const initialState = {
    cart: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                cart: action.payload,
                loading: false
            }

        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload
            }

        case DELETE_FROM_CART:
            return {
                ...state,
                cart: action.payload
            }

        case CART_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}