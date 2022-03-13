import React from 'react';
import main from './ItemQuantityControl.module.css'
import branding from '../../Branding.module.css'
let styles = {};
Object.assign(styles, main, branding);

function ItemQuantityControl(props) {
    return (
        <div className={styles.quantityControl}>
            <label>Amount</label>
            <input type='number' min='0'/>
            <button className={styles['accent-secondary']}>+Add</button>
        </div>
    );
}

export default ItemQuantityControl;
