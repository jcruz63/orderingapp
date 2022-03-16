import React, {useContext} from 'react';
import styles from './MenuItem.module.scss'
import ItemQuantityControl from "../ItemQuantityControl/ItemQuantityControl";
import CartContext from "../../store/cart-context";

function MenuItem(props) {

    function convertPenniesToDollar(pennies){
        return pennies / 100;
    }

    const ctx = useContext(CartContext);

    const addItem = (event) => {
        event.preventDefault();
        const qty = event.target.elements['qty'].value;
        ctx.addItem({qty: qty, item: props.item})
    }
    return (
        <div className={styles.menuItem}>
            <div className={styles.description}>
                <h3>{props.item.name}</h3>
                <section>{props.item.description}</section>
                <div>${convertPenniesToDollar(props.item.price)}</div>
            </div>
            <ItemQuantityControl onItemAdd={addItem}/>
        </div>
    );
}

export default MenuItem;
