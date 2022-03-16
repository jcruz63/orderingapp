import React from "react";

const CartContext = React.createContext({
    items:[],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    updateQuantity: (id, update) => {}
})

export default CartContext;
