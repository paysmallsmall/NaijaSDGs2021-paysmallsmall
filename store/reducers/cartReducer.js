import {
  CART_ADD_ITEM,
  CART_CANCELED,
  CART_FETCH,
  CART_REMOVE_ITEM,
  CART_RESOLVED,
} from "../types/cartTypes";

const initialState = {
  isLoading: false,
  cart: [],
  noItems: 0,
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case CART_RESOLVED:
      return {
        ...state,
        isLoading: false,
        cart: action.payload,
      };
    case CART_ADD_ITEM:
      const product = state.cart.find((prod) => prod.id === action.payload.id);
      let newProduct, newCart;
      if (product) {
        newProduct = {
          ...product,
          quantity: product.quantity + action.payload.quantity,
          subTotal: product.subTotal + action.payload.subTotal,
        };
        newCart = state.cart.filter((prod) => prod.id !== product.id);
      }
      const toAdd = product
        ? [...newCart, newProduct]
        : [...state.cart, action.payload];
      return {
        ...state,
        isLoading: false,
        cart: toAdd,
        noItems: state.noItems + action.payload.quantity,
        total: state.total + action.payload.subTotal,
      };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        isLoading: false,
        cart: state.cart.filter((product) => product.id !== action.payload),
        noItems:
          state.noItems -
          state.cart.find((prod) => prod.id === action.payload).quantity,
        total:
          state.total -
          state.cart.find((prod) => prod.id === action.payload).subTotal,
      };

    case CART_CANCELED:
      return {
        ...state,
        isLoading: false,
        cart: [],
        total: 0,
        noItems: 0,
      };
    default:
      return state;
  }
};

export default cartReducer;
