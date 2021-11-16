import * as actionTypes from './carttypes';

const initialState = {
    basket: [""],
    currentItem: null,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //Get the items data from products array
            const item = state.products.find((prod) =>
                prod.id === action.payload.id
            );
            //check if item is already in cart
            const inCart = state.basket.find((item) =>
                item.id === action.payload ? true : false
            );
            return {
                ...state,
                basket: inCart
                    ? state.basket.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    :
                    [...state.basket,
                    {
                        ...item, qty: 1
                    }
                    ],
            };

        case actionTypes.DELETE_FROM_CART:
            return {
                ...state,
                basket: state.basket.filter((item) => item.id !== action.payload.id),
            }

        case actionTypes.CART_QUANTITY:
            return {
                ...state,
                basket: state.basket.map((item) => item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item)
            }

        case actionTypes.CART_LOADING:
            return {
                ...state,
                currentItem: action.payload,
            }

        default:
            return state;
    }
}

export default cartReducer;