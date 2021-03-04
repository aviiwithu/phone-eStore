export const CartReducer = (state, action) =>{

    const {ShoppingCart,totalPrice,qty} = state;

    let product;
    let updatedPrice;
    let updatedQty;

    switch (action.type) {
        case "AddToCart":
            const check = ShoppingCart.find(product=> product.id === action.id);
            if(check){
                return state;
            } else {
                product= action.product;
                product['qty']= 1;
                updatedQty = qty+1;
                updatedPrice = totalPrice + product.price;
                return {ShoppingCart: [product,...ShoppingCart],totalPrice:updatedPrice, qty: updatedQty }
            }
            default:
                return state;

    }
};