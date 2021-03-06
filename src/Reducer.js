
export const rootReducer=(state,action)=>{
    switch(action.type){
        case "addToCart":
            let tempSub= state.cartSubtotal+action.payload.price;
            let tempTax = state.cartSubtotal*0.1;
            let tempPay = action.payload;
            tempPay.count =tempPay.count+1;
            tempPay.inCart = true;
            console.log(tempPay);
            console.log(action.payload);
            return {
                ...state,
                cart:[...state.cart,tempPay],
                detail:action.payload,
                modalOpen:true,
                cartSubtotal:tempSub,
                cartTax:tempSub*0.1,
                cartTotal:tempSub+tempTax
            };
        case "showDetails":
            return {
                ...state,
                detail:action.payload
            };
        case "increment":
            let cartCount= state.cart.find(item=>item.id===action.payload.id);
            let temSub = state.cartSubtotal+cartCount.price;
            let temTax = temSub*0.10;
            let tempTo = temSub+temTax
            return {
                ...state,cart:state.cart.map((item)=>item.id===action.payload.id?{...item,count:item.count+1}:item),
                cartSubtotal:temSub,
                cartTax:temTax,
                cartTotal:tempTo
            };
            
        case "decrement":
            if(action.payload.count>1){
                let cartCount = state.cart.find(item=>item.id===action.payload.id);
                let decSub = state.cartSubtotal-cartCount.price;
                let temTotal = decSub+decSub*0.10
            return {
                ...state,
                cart:state.cart.map((item)=>item.id===action.payload.id?{...item,count:item.count-1}:item),
                cartSubtotal:decSub,
                cartTax:decSub*0.10,
                cartTotal:temTotal
            }} else {
                let cartVal = state.store.find(item=>item.id===action.payload.id);
                cartVal.inCart = false;
                let decSubtotal = state.cartSubtotal-cartVal.count*cartVal.price;
                let decTax = decSubtotal*0.10;
                let decTotal = decSubtotal+decTax;
                return {
                    ...state,cart:state.cart.filter((item)=>item.id!==action.payload.id),
                    cartSubtotal:decSubtotal,
                    cartTax:decTax,
                    cartTotal:decTotal
                }
            }
        case "delete":
            const filtered = state.cart.filter(item=>item.id!==action.payload.id)
            const cartVal = state.store.find(item=>item.id===action.payload.id)
            cartVal.inCart = false;
            cartVal.count = 0;
            let delSubtotal = state.cartSubtotal-action.payload.count*action.payload.price;
            let delTax = delSubtotal*0.10;
            let delTotal = delSubtotal+delTax;
            return {
                ...state,
                cart:filtered,
                cartSubtotal:delSubtotal,
                cartTax:delTax,
                cartTotal:delTotal
            };
        case "clearCart":
            return state;
        case "closeModal":
            return {
                ...state, modalOpen:false
            }
        default:
            return state;
    }
}