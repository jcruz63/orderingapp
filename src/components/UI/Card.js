import React from 'react';
import styles from './Card.module.css';

function Card(props) {
    const defaultStyles = [styles['card-drop-shadow'], styles.card]

    return (
        <div className={defaultStyles.join(' ') + ' ' + props.classes}>
            {props.children}
        </div>
    );
}

export default Card;
