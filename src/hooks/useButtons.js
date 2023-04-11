import classes from './useButtons.module.css';

export const ShoppingButtons = (props) => {
  return (
    <button className={classes['shopping-button']} onClick={props.action}>
      {props.content}
    </button>
  );
};
