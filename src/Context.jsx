// import React from "react";
import { storeProducts } from "./data";

// export const ProductContext = createContext();

// export const ProductProvider = (props) => {

  const [state, setState] = useState({
    cart:[],
    detail:{},
    store:[],
    modalOpen:false,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0,
  });
  const {cart,detail,store, modalOpen,cartSubTotal,cartTax,cartTotal} = state;

  // useEffect(()=>{
  //   let tempCart = [];
  //   storeProducts.forEach(item=>{
  //     const singleItem = {...item};
  //     tempCart = [...tempCart,singleItem]
  //   })
  //   setState({...state,store:tempCart});

  // },[]);

  // const tempStore=()=>{
  //   let tempCart = [];
  //   storeProducts.forEach(item=>{
  //     const singleItem = {...item};
  //     tempCart = [...tempCart,singleItem]
  //   })
  //   setState({...state,store:tempCart});
    
  // }

  const addToCart = (id) => {
    const info2 = store.find((itm) => itm.id === id);
    const index = store.indexOf(info2);
    const singleItem = store[index];
    singleItem.inCart = true;
    singleItem.count = 1;
    singleItem.total = singleItem.price;

    setState({...state, cart:[...cart,info2],detail:info2,modalOpen:true });
    
  };

  const showDetails = (id) => {
    const singleDetail = storeProducts.find((item) => item.id === id);
  setState({...state,detail:singleDetail});
  };

  const setModalOpen = (condition) =>{
    setState({...state,modalOpen:false })
  }

  const increment = (id)=>{
    const singleItem = cart.find(item=>item.id===id);
      singleItem.count= singleItem.count + 1;
      addTotals();
  };

  const decrement = (id)=>{
    let singleItemDec = cart.find(item=>item.id===id);

        if(singleItemDec.count>1){
          singleItemDec.count = singleItemDec.count - 1;
        } else {
          singleItemDec.inCart = false;
          removeItem(id);
        }
  };

  const removeItem = (id) => {
    const filtered = cart.filter(item=> item.id !==id );
    const found = cart.find(item=> item.id ===id );
    found.inCart = false;
    addTotals();
    setState({...state,cart:filtered});

  };

  const addTotals = ()=>{
    let subTotal = 0;
    cart.map(item=> (subTotal += item.total ) );
    const tempTax = subTotal*0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal+ tax; 
    setState({...state,cartSubTotal:subTotal,cartTax:tax,cartTotal:total});
  }

  const clearStore = ()=>{
    setState({...state,cart:[],store:console.log("india") })
  }

 
  return (
    <>
      <ProductContext.Provider
        value={{
          store,
          cart,
          addToCart,
          showDetails,
          detail,
          modalOpen,
          setModalOpen,
          increment,
          decrement,
          removeItem,
          cartSubTotal,
          cartTax,
          cartTotal,
          addTotals,
          // tempStore,
          clearStore
        }}
      >
        {/* {props.children} */}
      </ProductContext.Provider>
    </>
  );
};
