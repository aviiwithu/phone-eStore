import React from 'react'
import CartItem from './CartItem'

const CartList = ({cart,dispatch}) => {
    return (
        <div>
           {cart.map((item)=>{
               return <CartItem key={item.id} cart={item} dispatch={dispatch} />
           }
           )}

        </div>
    )
}

export default CartList
