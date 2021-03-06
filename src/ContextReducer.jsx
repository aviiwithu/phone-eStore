import React,{createContext,useReducer} from 'react'
import {storeProducts} from './data'
import {rootReducer} from './Reducer'

export const RootContext = createContext();

const ContextReducer = (props) => {
    
    const [state, dispatch] = useReducer(rootReducer, initialState)

    return (
        <RootContext.Provider value={[state,dispatch]} >
            {props.children}
        </RootContext.Provider>
    )
}

export default ContextReducer

const initialState= {
    store:storeProducts,
    cart:[],
    detail:{},
    modalOpen:false,
    cartSubtotal:0,
    cartTax:0,
    cartTotal:0
}