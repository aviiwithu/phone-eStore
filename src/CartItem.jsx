import React from 'react'

const CartItem = ({cart,dispatch}) => {

    const{title, img,price, count } = cart;

    return (
        <div className="row my-1 text-capitalize text-center" >
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt="im" style={{width:'5rem',height:'5rem' }} className="img-fluid " />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none" > Product: </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price: </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-black mx-1" onClick={()=>dispatch({type:"decrement",payload:cart})} >-</span>
                    <span className="btn btn-black mx-1">{count} </span>
                    <span className="btn btn-black mx-1" onClick={()=>dispatch({type:"increment",payload:cart})} >+</span>
                </div>
            </div>
            {/*  */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>dispatch({type:"delete",payload:cart})} >
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
             <strong>Item Total: $ {price*count} </strong>
            </div>
        </div>
    )
}

export default CartItem
