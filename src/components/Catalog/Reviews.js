import classes from './Reviews.module.css';
import Stars from './Stars';

const Reviews = (props) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.name}>Name: {props.name}</h3>
      <h3>Comment: {props.reviews}</h3>
      <Stars stars={props.rating} />
    </div>
  );
};

export default Reviews;
