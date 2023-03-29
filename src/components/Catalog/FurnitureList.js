import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import classes from './FurnitureList.module.css';
import { formatPrice } from '../../UI/helpers';

const FurnitureList = () => {
  const filtered_products = useSelector(
    (state) => state.products.filteredProducts
  );
  
  return (
    <div className={classes['container-grid']}>
      {filtered_products.map((product) => {
        return (
          <Link to={product.slug} key={product._id} className={classes["image-container"]}>
            <img className={classes.img} src={product.img} alt={product.name} />
            <div className={classes.text}>
              <h3>Product: {product.name}</h3>
              <h5>Set: {product.shortDescription}</h5>
              <h3>Price: {formatPrice(product.price)}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FurnitureList;
