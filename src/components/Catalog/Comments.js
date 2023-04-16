import classes from './Comments.module.css';
import Stars from './Stars';

const Comments = (props) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.name}>Name: {props.name}</h3>
      <h3>Comment: {props.comment}</h3>
      <Stars stars={props.rating} />
    </div>
  );
};

export default Comments;
