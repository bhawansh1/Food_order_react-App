import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const protalEle = document.getElementById('overlays');

const Backdrop = props =>{
    return <div className={classes.backdrop} />;
}

const ModalOverlays = props =>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}> {props.children}</div>
        </div>
    )
}

const Modal = props => {   
    return <>
        {ReactDOM.createPortal(<Backdrop /> , protalEle)}
        {ReactDOM.createPortal(<ModalOverlays >{props.children}</ModalOverlays>, protalEle)}
    </>
}

export default Modal;