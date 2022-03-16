import React, {useContext} from 'react';
import main from './ItemQuantityControl.module.css'
import branding from '../../Branding.module.css'


let styles = {};
Object.assign(styles, main, branding);

function ItemQuantityControl(props) {


    return (
        <form className={styles.quantityControl} onSubmit={props.onItemAdd}>
            <label htmlFor="qty">Amount</label>
            <input name="qty" type='number' min='0'defaultValue={0}/>
            <button type='submit' className={styles['accent-secondary']} >+Add</button>
        </form>
    );
}

export default ItemQuantityControl;
