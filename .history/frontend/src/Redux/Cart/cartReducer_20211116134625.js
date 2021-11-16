import * as actionTypes from './carttypes';

const initialState = {
    cart: [],
     : [],
    currentItem: null,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: action.payload,
                loading: false
            }

        case actionTypes.DELETE_FROM_CART:
            return {
                ...state,
                cart: action.payload
            }

        case actionTypes.CART_QUANTITY:
            return {
                ...state,
                cart: action.payload
            }

        case actionTypes.CART_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}

export default cartReducer;