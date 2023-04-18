import { Link } from 'react-router-dom';
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div>
        <p>Author: Ivaylo Ivanov</p>
        <p>
          <a href="mailto:ivaylo_ivanov84@yahoo.co.uk">
            ivaylo_ivanov84@yahoo.co.uk
          </a>
        </p>
      </div>
      <div>
        <h3>Find us on:</h3>
        <Link to="http://facebook.com"><BsFacebook /></Link>
        <Link to="https://www.instagram.com"><BsInstagram /></Link>
      </div>
    </footer>
  );
};
export default Footer;
