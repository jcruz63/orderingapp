import React from 'react';
import Card from "../UI/Card/Card";
import MenuItem from "../MenuItem/MenuItem";
import styles from './Menu.module.scss';

function Menu(props) {

    const testItems = [
        {
            name: "Sushi",
            description: "Delicious raw fish",
            price: 2299
        },
        {
            name: "Clams",
            description: "Fresh caught and steamed clams",
            price: 1599
        },
        {
            name: "Crab boil",
            description: "Blue crabs done in a low country boil comes mild, hot, and spicy",
            price: 3199
        },
    ]

    return (
        <Card classes={styles.menu}>
            {
                testItems.map(item => (<MenuItem item={item} />))
            }
        </Card>
    );
}

export default Menu;
