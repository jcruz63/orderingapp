import React from 'react';
import header from './AppHeader.module.css'
import branding from '../../Branding.module.css'
import CartHeader from "../CartHeader/CartHeader";
let styles = {};
Object.assign(styles, header, branding)

function AppHeader(props) {
    return (
        <header className={[styles['app-header'], styles['primary-background']].join(' ')}>
            <h2>Ordering App</h2>
            <CartHeader />
        </header>
    );
}

export default AppHeader;
