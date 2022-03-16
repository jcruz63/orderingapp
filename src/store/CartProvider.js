import React, {useState} from "react";
import CartContext from "./cart-context";


function CartProvider(props) {

    const [lineItems, setLineItems] = useState([]);



    const removeItemFromCartHandler = id => {
        setLineItems(currentItems => {
            return currentItems.filter(lineItem => lineItem.item.id !== id);
        })
    }

    const updateCartQuantityHandler = (id, newQty) => {
        if(newQty === 0) {
            removeItemFromCartHandler(id)
        }

        setLineItems(currentItems => {
            let index = currentItems.findIndex(lineItem => lineItem.item.id === id);
            if(index !== -1){
                currentItems[index].qty = newQty;
            }
            return currentItems;
        })
    }

    const addItemToCartHandler = newLine => {

        setLineItems(currentItems => {
            let index = currentItems.findIndex(lineItem => lineItem.item.id === newLine.item.id);
            if(index === -1){
                return [...currentItems, newLine];
            } else {
               return updateCartQuantityHandler(newLine.item.id, newLine.qty)
            }

        })


    }


    const cartContext = {
        items: lineItems,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        updateQuantity: updateCartQuantityHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
