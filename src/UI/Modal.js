import classes from './Modal.module.css';

export const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

export const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      <Backdrop onClose={props.onClose} />
      <ModalOverlay> {props.children} </ModalOverlay>
    </>
  );
};

export default Modal;
