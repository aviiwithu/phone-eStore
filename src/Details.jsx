import React,{useContext} from "react";
import { Link } from "react-router-dom";
import ButtonContainer from './Button';
import {RootContext} from './ContextReducer'

const Details = () => {

  const [state, dispatch] = useContext(RootContext);

  // console.log(state);
  
  const {detail} = state; 
  const {title,img,price,info,company,inCart} = detail;

  return (
    <>
    <div className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title} </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} alt="img" className="ing-fluid"/>
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h1>model: {title} </h1>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by: <span className="text-uppercase">{company} </span>
                </h4>
                <h4 className="text-blue">
                  <strong> price: <span>Rs </span>{price} </strong>
                </h4>
                <p className="text-capitalize font-weight-bold">
                  some info about product
                </p>
                <p className="text-muted lead"> {info} </p>
                <span>
                  <Link to="/">
                    <ButtonContainer>
                      Back to Products
                    </ButtonContainer>
                  </Link>
                    <ButtonContainer disabled={inCart?true:false} onClick={()=>dispatch({type:"addToCart",payload:detail})}
                    
                     cart >
                      {inCart?'inCart':'Add to Cart'}
                    </ButtonContainer>
                </span>
              </div>
            </div>
          </div>

    </>
  );
};

export default Details;
