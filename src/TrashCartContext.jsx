// import React,{createContext, useReducer, useState} from 'react'
import {CartReducer} from './CartReducer'

// export const CartContext = createContext();

export const CartContextProvider = (props)=> {

    const [cart, dispatch] = useReducer(CartReducer,{ShoppingCart: [],totalPrice: 0, qty: 0,showDetails:[] });

    const [details, setDetails] = useState([]);


    return(
        <>
        <CartContext.Provider value={{...cart, dispatch, detailState:[details, setDetails]}} >
            {/* {props.children} */}
        </CartContext.Provider>
        </>
    )
}