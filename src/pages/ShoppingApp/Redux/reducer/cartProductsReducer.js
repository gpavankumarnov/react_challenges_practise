import actionTypes from "../actions/actiontype"

const initialStore = {
    cartsList:[]
}


export const cartProductsReducer = (state=initialStore, action) => {
        switch(action.type){
            case actionTypes.Cart_products: 
            console.log("cart payload is", action.payload)
            return {
                ...state, cartsList: [...state.cartsList, action.payload]
            }
            default:
            return state;
        }
}