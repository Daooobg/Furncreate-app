import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsBasket } from 'react-icons/bs';
import { TbListDetails } from 'react-icons/tb';

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
          <div className={classes['image-container']}>
            <img className={classes.img} src={product.img} alt={product.name} />
            <div className={classes['buttons-container']}>
              <BsBasket className={classes['shopping-button']} />
              <Link to={product.slug} key={product._id} title="Details" >
                <TbListDetails className={classes['details-button']} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FurnitureList;
