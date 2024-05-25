import apiConfig from "../../apiConfig";
import actionTypes from "./actiontype";



export const fetchProducts = () => async(dispatch) => {
    const response = await apiConfig.get('/products')

    dispatch({type:actionTypes.Fetch_products, payload: response.data})
}


export const addToCart = (payload)=>{
    console.log("payload -", payload);
    return {
        type: actionTypes.Cart_products,
        payload: payload
    }
}