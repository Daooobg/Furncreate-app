import classes from './Main.module.css';
import { useLocation } from 'react-router-dom';

const Main = (props) => {
  const { pathname } = useLocation();
  let mainClass = classes['container-main'];
  if (pathname.includes('/catalog')) {
    mainClass = `${classes['container-catalog']}`;
  }
  return <main className={mainClass}>{props.children}</main>;
};

export default Main;
