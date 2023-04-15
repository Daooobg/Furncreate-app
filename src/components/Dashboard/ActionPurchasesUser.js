import { useEffect, useState } from 'react';
import { getOwnPurchases } from '../../services/purchaseService';
import { formatPrice } from '../../UI/helpers';
import classes from './ActionPurchasesUser.module.css';

const ActionPurchasesUser = () => {
  const [purchases, setPurchases] = useState([]);
  useEffect(() => {
    getOwnPurchases().then((data) => setPurchases(data));
  }, []);

  const data = purchases.map((item, index) => {
    const date = new Date(item.date);
    console.log(date);
    return (
      <div className={classes.container} key={index}>
        <img src={item.img} alt={item.product} />
        <div>
          <h4>Product</h4>
          <h4>Name: {item.product}</h4>
          <h4>Date of purchase: {date.toLocaleString()}</h4>
          <h4>Quantity: {item.quantity}</h4>
          <h4>Price: {formatPrice(item.price)}</h4>
          <h4>Total Amount: {formatPrice(item.price * item.quantity)}</h4>
        </div>
        <div>
          <h4>Shipping Address</h4>
          <h4>{item.shippingAddress.firstLine}</h4>
          <h4>{item.shippingAddress.secondLine}</h4>
          <h4>
            {item.shippingAddress.county}, {item.shippingAddress.city}
          </h4>
          <h4>{item.shippingAddress.postcode}</h4>
          <h4>Contact details: {item.shippingAddress.phoneNumber}</h4>
        </div>
      </div>
    );
  });
  console.log(purchases);
  return <>{purchases && data}</>;
};

export default ActionPurchasesUser;
