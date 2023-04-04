import classes from './LoadProductImage.module.css';

const LoadProductImage = ({ value }) => {
  if (value !== '') {
    return <img src={value} alt="Invalid img" className={classes.img} />;
  }
  return (
    <img
      src="https://drive.google.com/uc?export=view&id=1wJG4XTR2--bpn4XTvGvpSIgV5kAkF-ll"
      alt="pic"
      className={classes.img}
    />
  );
};

export default LoadProductImage;
