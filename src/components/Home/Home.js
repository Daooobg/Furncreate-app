import { Link } from 'react-router-dom';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.banner}>
      <h1>
        Welcome to <span>Furncreate</span>
      </h1>
      <p>
        We offer a wide selection of high-quality furniture to fit any style and
        budget.
      </p>
      <Link to={'gallery'}>
        <button type="button" className={`${classes['btn-left']} ${classes.buttons}`}>
          Gallery
        </button>
      </Link>
      <Link to={'/catalog'}>
        <button type="button" className={`${classes['btn-right']} ${classes.buttons}`}>
          Shop now!
        </button>
      </Link>
    </div>
  );
};

export default Home;
