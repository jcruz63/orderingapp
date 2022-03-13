import React from 'react';
import styles from './MenuItem.module.scss'
import ItemQuantityControl from "../ItemQuantityControl/ItemQuantityControl";

function MenuItem(props) {

    function convertPenniesToDollar(pennies){
        return pennies / 100;
    }

    return (
        <div className={styles.menuItem}>
            <div className={styles.description}>
                <h3>{props.item.name}</h3>
                <section>{props.item.description}</section>
                <div>${convertPenniesToDollar(props.item.price)}</div>
            </div>
            <ItemQuantityControl />
        </div>
    );
}

export default MenuItem;
