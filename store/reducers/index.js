import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";

export const rootReducerCombined = combineReducers({
  auth: authReducer,
});

export const rootReducer = {
  auth: authReducer,
  cart: cartReducer,
};

export default rootReducer;
