import React,{useContext} from 'react'
import Title from './Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart';
import CartList from './CartList'
import CartTotals from './CartTotals';
import {RootContext} from './ContextReducer'

const Cart = () => {

    const [state,dispatch] = useContext(RootContext);

    if(state.cart.length>0){
        return (
            <>
            <Title name="Your" title="Cart" />
            <CartColumns />
            <CartList cart={state.cart} dispatch={dispatch} />
            <CartTotals state={state} dispatch={dispatch} />
            </>
        )
    } else {
        return (
            <>
            <EmptyCart />
            </>
        )
    }
}

export default Cart
