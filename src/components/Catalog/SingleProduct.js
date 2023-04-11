import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useParams,
  Link,
  useNavigate,
} from 'react-router-dom';

import { formatPrice } from '../../UI/helpers';
import {
  deleteProductData,
  fetchSingleProductData,
} from '../../store/products-actions';
import classes from './SingleProduct.module.css';
import Loading from '../LoadingSpinner/Loading';
import { cartActions } from '../../store/cart';
import { ShoppingButtons } from '../../hooks/useButtons';

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProductData(id));
  }, [dispatch]);

  const product = useSelector((state) => state.products.singleProduct);
  const notification = useSelector((state) => state.ui.notification);
  const shoppingBag = useSelector((state) => state.cart.shoppingBag);
  const shoppingProduct = shoppingBag.filter((item) => product._id === item.id);
  let availableAmount;
  if (shoppingProduct.length > 0) {
    availableAmount = product.quantity - shoppingProduct[0].quantity;
  } else {
    availableAmount = product.quantity;
  }

  const [amount, setAmount] = useState(1);
  useEffect(() => {
    if (availableAmount <= 0) {
      setAmount(0);
    }
  }, [availableAmount]);

  if (notification.status === 'loading') {
    return <Loading />;
  }

  const deleteHandler = () => {
    dispatch(deleteProductData(product._id));
    return navigate(`/catalog/`);
  };

  const addProduct = () => {
    const addProductData = {
      product: product.name,
      id: product._id,
      quantity: amount,
      price: product.price,
      img: product.img,
      total: product.total,
      inStock: product.quantity,
    };
    dispatch(cartActions.addProduct(addProductData));
  };

  const increaseHandler = () => {
    if (availableAmount - amount <= 0) {
    } else {
      setAmount((amount) => amount + 1);
    }
  };
  const decreaseHandler = () => {
    if (amount <= 1) {
      return;
    }
    setAmount((amount) => amount - 1);
  };

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
          <div className={classes['buttons-container']}>
            {product.quantity > 0 && (
              <div className={classes['add-container']}>
                <ShoppingButtons action={decreaseHandler} content="-"/>
                <h2>{amount}</h2>
                <ShoppingButtons action={increaseHandler} content="+" />
              </div>
            )}
            <Link
              to={`/catalog/${product.slug}/edit`}
              className={classes['nav-link']}
            >
              edit
            </Link>
            <button
              type="button"
              className={classes['nav-link']}
              onClick={deleteHandler}
            >
              delete
            </button>
            {product.quantity > 0 && (
              <button className={classes['nav-link']} onClick={addProduct}>
                add to cart
              </button>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
