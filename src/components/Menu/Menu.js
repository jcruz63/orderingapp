import React from 'react';
import Card from "../UI/Card/Card";
import MenuItem from "../MenuItem/MenuItem";
import styles from './Menu.module.scss';

function Menu(props) {



    return (
        <Card classes={styles.menu}>
            {
                props.items.map(item => (<MenuItem item={item} />))
            }
        </Card>
    );
}

export default Menu;
