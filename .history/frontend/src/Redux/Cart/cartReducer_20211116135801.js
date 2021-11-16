import * as actionTypes from './carttypes';

const initialState = {
    cart: [],
    products: [],
    currentItem: null,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //Get the items data from products array
            const item = state.products.find(prod => prod.id === action.payload.id);
            //check if item is already in cart
            const inCart = state.cart.find((item) =>
                item.id === action.payload ? true : false
            );
            return {
                ...state,
                cart: inCart ? state.cart.map(
                    item => item.id === action.payload.id ?
                    ),
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