import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { formatPrice } from '../../UI/helpers';
import { fetchSingleProductData } from '../../store/products-actions';
import classes from './SingleProduct.module.css';

const SingleProduct = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProductData(id));
  }, [dispatch]);

  const product = useSelector((state) => state.products.singleProduct);
  const notification = useSelector((state) => state.ui.notification);

  if (notification.status === 'loading') {
    return;
  }

  return (
    <>
      <div className={classes.section}>
        <Link to="/catalog" className={classes['nav-link']}>
          back to products
        </Link>
        <h1>{product.name}</h1>
        <section className={classes['product-center']}>
          <img src={product.img} alt="main" className={classes.main} />
        </section>
        <section className="content">
          <h3 className={classes.price}>{formatPrice(product.price)}</h3>
          <p className={classes.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            atque quia, deleniti nam aut, obcaecati quae fugit ipsam fuga velit
            adipisci? Quasi iusto iste corrupti ea quo dignissimos, a repellat
            quidem repudiandae fugiat placeat nulla libero ratione porro,
            doloribus excepturi.
          </p>
          <p className={classes.info}>
            <span>Available: </span>
            {product.quantity > 0 ? 'In Stock' : 'Out of stock'}
          </p>
          <p className={classes.info}>
            <span>Model: </span>
            {product.partNumber}
          </p>
          <p className={classes.info}>
            <span>Type: </span>
            {product.type}
          </p>
          <hr />
          <Link to="/cart" className={classes['nav-link']}>
            add to cart
          </Link>
          <Link to="edit" className={classes['nav-link']}>
            edit
          </Link>
          <button type='button' className={classes['nav-link']}>
            delete
          </button>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
