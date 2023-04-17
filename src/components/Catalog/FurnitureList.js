import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsBasket } from 'react-icons/bs';
import { TbListDetails } from 'react-icons/tb';

import classes from './FurnitureList.module.css';

const FurnitureList = () => {
  const filtered_products = useSelector(
    (state) => state.products.filteredProducts
  );

  return (
    <>
      {filtered_products.length < 1 && <h2 className={classes["not-found"]}>No products found</h2>}
      <div className={classes['container-grid']}>
        {filtered_products.map((product) => {
          return (
            <div key={product._id} className={classes['image-container']}>
              <Link to={product.slug} title="Details">
                <img
                  className={classes.img}
                  src={product.img}
                  alt={product.name}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FurnitureList;
