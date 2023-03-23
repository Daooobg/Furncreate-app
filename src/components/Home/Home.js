import classes from './Home.module.css';

const Home = () => {
  return (
    // <div className={classes.container}>
      <div className={classes.banner}>
        <h1>
          Welcome to <span>Furncreate</span>
        </h1>
        <p>
          We offer a wide selection of high-quality furniture to fit any style
          and budget.
        </p>
        <button type="button" className={classes['btn-left']}>
          Gallery
        </button>
        <button type="button" className={classes['btn-right']}>
          Shop now!
        </button>
      </div>
    // </div>
  );
};

export default Home;
