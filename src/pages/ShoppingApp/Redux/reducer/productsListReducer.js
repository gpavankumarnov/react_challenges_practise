
import actionTypes from "../actions/actiontype"

const initialStore = {
    product : []
}


export const productsListReducer = (state=initialStore, action) => {
  
    switch(action.type){
        case actionTypes.Fetch_products: 
        console.log("payload is", action.payload)
        
        return state={product:[...action.payload]}
   
    default: 
    return state
}   
}