import React, {useContext} from 'react';
import classes from "./Cart.module.scss";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";

const testData = [
    {
        qty: 2,
        item: {
            id:1,
            name: "Sushi",
            description: "Delicious raw fish",
            price: 2299
        }
    },
    {
        qty:4,
        item: {
            id:2,
            name: "Clams",
            description: "Fresh caught and steamed clams",
            price: 1599
        }
    },
    {
        qty:1,
        item: {
            id:3,
            name: "Crab boil",
            description: "Blue crabs done in a low country boil comes mild, hot, and spicy",
            price: 3199
        }
    },
]

function CartLineItem(props){

    const ctx = useContext(CartContext);

    const convertPenniesToDollar = (pennies) =>{
        return pennies / 100;
    }

    const getLineTotal = () => {
        return props.qty * props.item.price;
    }

    const addOne = () => {
        ctx.updateQuantity(props.item.id, +props.qty + 1)
    }
    const removeOne = () => {
        ctx.updateQuantity(props.item.id, +props.qty - 1)
    }

    return (
        <div id={props.item.id}>
            <h3>{props.item.name}</h3>
            <div>${convertPenniesToDollar(props.item.price)}</div>
            <div>Qty: {props.qty}</div>
            <div>total ${convertPenniesToDollar(getLineTotal())}</div>
            <div>
                <button onClick={addOne}>+</button>
                <button onClick={removeOne}>-</button>
            </div>
            <hr />
        </div>
    )
}

function Cart(props) {

    const ctx = useContext(CartContext);

    return (
            <Modal onBackgroundClick={props.onClose}>
                {ctx.items.map(line => (<CartLineItem qty={line.qty} item={line.item}/>))}
                <button onClick={props.onClose}>Close</button>
            </Modal>
    );
}

export default Cart;
