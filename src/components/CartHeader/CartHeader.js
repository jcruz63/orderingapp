import React from 'react';
import CartHeaderStyle from './CartHeader.module.css'
import Branding from '../../Branding.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
let styles = {}
Object.assign(styles, CartHeaderStyle, Branding);

function CartHeader(props) {
    return (
        <div className={[styles['secondary-background'], styles['cart-header']].join(' ')}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Your Cart</span>
            <span className={[styles['accent-secondary'], styles['cart-bubble']].join(' ')}>2</span>
        </div>
    );
}

export default CartHeader;
