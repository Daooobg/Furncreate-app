import { useNavigate } from 'react-router-dom';

import classes from './ModalAuth.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const navigate = useNavigate();

  const closeHandler = () => {
    return navigate(-1);
  };

  return (
    <>
      <Backdrop onClose={closeHandler} />
      <ModalOverlay> {props.children} </ModalOverlay>
    </>
  );
};

export default Modal;
