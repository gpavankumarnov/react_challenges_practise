import {  combineReducers } from "redux";
import { productsListReducer } from "./productsListReducer";
 import { cartProductsReducer } from "./cartProductsReducer";

export const rootReducer = combineReducers({
    
        products: productsListReducer,
        cartsList: cartProductsReducer
    }
)