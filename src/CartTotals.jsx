import React from 'react'
// import {Link} from 'react-router-dom'

const CartTotals = ({state,dispatch}) => {
    
    const {cartSubtotal, cartTax, cartTotal} = state;

    // console.log(value);

    return (
        <div className="container" >
            <div className="row">
                <div className="col-10 mt-2 ml-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize mb-3 text-right ">
                    {/* <Link to="/" >
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>dispatch({type:"clearCart"})}  >
                            clear cart
                        </button>       
                    </Link> */}

                    <h5>
                        <span className="text-title"> subTotal: </span>
                        <strong>$ {cartSubtotal} </strong>
                    </h5>
                    <h5>
                        <span className="text-title"> Tax: </span>
                        <strong>$ {cartTax} </strong>
                    </h5>
                    <h5>
                        <span className="text-title"> Total: </span>
                        <strong>$ {cartTotal} </strong>
                    </h5>
                </div>
            </div>
            
        </div>
    )
}

export default CartTotals
