import React, { useContext } from "react";
import ReactModal from "react-modal";
import {RootContext} from "./ContextReducer";
import ButtonContainer from "./Button";
import { Link } from "react-router-dom";

const Modal = (props) => {


  const [state,dispatch] = useContext(RootContext);
  const {modalOpen,detail} = state;

  return (
    <>
      <ReactModal
        ariaHideApp={false}
        isOpen={modalOpen}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={() => dispatch({type:"closeModal"})}
        style={{
          content: {
            position: "relative",
            inset: "0",
            height: "min-content",
            width: "min-content",
            margin: "auto",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <h5>Item added to the cart</h5>
        <img src={detail.img} alt="itemImage" style={{ height: "40vh" }} />
        <button
          onClick={() => dispatch({type:"closeModal"})}
          style={{
            position: "absolute",
            top: "8px",
            right: "10px",
            color: "black",
            border: "none",
            background: "none",
          }}
        >
          x
        </button>

        <Link to="/">
          <ButtonContainer onClick={()=>dispatch({type:"closeModal"})} >
            Go to Products
          </ButtonContainer>
        </Link>
        <Link to="/cart">
          <ButtonContainer  cart onClick={() => dispatch({type:"closeModal"})} >
            Cart
          </ButtonContainer>
        </Link>
      </ReactModal>
    </>
  );
};

export default Modal;
