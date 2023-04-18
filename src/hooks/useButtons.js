import classes from './useButtons.module.css';

export const ShoppingButtons = (props) => {
  return (
    <button className={classes['shopping-button']} onClick={props.action} disabled={props.disabled}>
      {props.content}
    </button>
  );
};

export const NavigationButtons = (props) => {
  let currentClass = `${classes['navigation-button']}`;
  if (props.category) {
    currentClass += ` ${classes.active}`;
  }

  return (
    <button className={currentClass} onClick={props.action} name={props.name}>
      {props.content}
    </button>
  );
};
