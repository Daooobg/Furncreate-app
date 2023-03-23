import classes from './Main.module.css';

const Main = (props) => {
  return <main className={classes['container-main']}>{props.children}</main>;
};

export default Main;
