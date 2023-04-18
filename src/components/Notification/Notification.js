import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '../../UI/Modal';

const Notification = (props) => {
  const navigate = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigation(`${navigate.pathname}${navigate.search}`);
    }, 2000);
  }, [navigate.pathname, navigate.search, navigation]);
  return <Modal onClose={props.closeNotification}>{props.children}</Modal>;
};
export default Notification;
