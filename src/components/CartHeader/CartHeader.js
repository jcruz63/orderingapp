import React, {useContext} from 'react';
import CartHeaderStyle from './CartHeader.module.css'
import Branding from '../../Branding.module.css'
import CartContext from "../../store/cart-context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
let styles = {}
Object.assign(styles, CartHeaderStyle, Branding);

function CartHeader(props) {
    const ctx = useContext(CartContext);

    return (
        <div className={[styles['secondary-background'], styles['cart-header']].join(' ')} onClick={props.onShowCart}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Your Cart</span>
            <span className={[styles['accent-secondary'], styles['cart-bubble']].join(' ')}>{ctx.totalAmount}</span>
        </div>
    );
}

export default CartHeader;
