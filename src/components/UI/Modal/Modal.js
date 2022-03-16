import React, {Fragment} from 'react';
import ReactDOM from "react-dom";
import classes from './Modal.module.scss';

function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onBackgroundClick}>{props.children}</div>
}

function ModalOverlay(props) {
    return (
        <Backdrop onBackgroundClick={props.onBackgroundClick}>
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
        </Backdrop>
    )
}

const portalElement = document.getElementById('modal');

function Modal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay onBackgroundClick={props.onBackgroundClick}>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
}

export default Modal;
