import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationButtons } from '../../hooks/useButtons';
import { getAllPurchases } from '../../services/purchaseService';
import { formatPrice } from '../../UI/helpers';
import classes from './ActionPurchasesAdmin.module.css';

const ActionPurchasesAdmin = () => {
  const [purchases, setPurchases] = useState([]);
  useEffect(() => {
    getAllPurchases().then((data) => setPurchases(data));
  }, []);
  const data = purchases.map((purchase, index) => (
    <PurchaseProduct key={index} purchase={purchase} />
  ));

  return (
    <>
      <h1>Purchases</h1>
      {data}
    </>
  );
};

export default ActionPurchasesAdmin;

const PurchaseProduct = ({ purchase }) => {
  const purchaseDate = new Date(purchase.date);
  return (
    <div className={classes.container}>
      <div>
        <h4>Product data</h4>
        <h6>Id: {purchase.furnitureId && purchase.furnitureId._id}</h6>
        <h6>Name: {purchase.furnitureId && purchase.furnitureId.name}</h6>
        <h6>
          Part Number: {purchase.furnitureId && purchase.furnitureId.partNumber}
        </h6>
        <h6>Type: {purchase.furnitureId && purchase.furnitureId.type}</h6>
        <h6>
          {purchase.furnitureId && (
            <Link to={`/catalog/${purchase.furnitureId.slug}`}>
              <NavigationButtons content="Link to product" />
            </Link>
          )}
        </h6>
      </div>
      <div>
        <h4>For Delivery</h4>
        <h6>purchase Date: {purchase && purchaseDate.toLocaleString()}</h6>
        <h6>Quantity: {purchase && purchase.quantity}</h6>
        <h6>Price: {purchase && formatPrice(purchase.price)}</h6>
        <h6>
          Total Price:{' '}
          {purchase && formatPrice(purchase.price * purchase.quantity)}
        </h6>
      </div>
      <div>
        <h4>Shipping details</h4>
        <h6>Name: {purchase.ownerId && purchase.ownerId.name}</h6>
        <h6>
          Phone Number:{' '}
          {purchase.shippingAddress && purchase.shippingAddress.phoneNumber}
        </h6>
        <h6>Address:</h6>
        <h6>
          {purchase.shippingAddress &&
            `${purchase.shippingAddress.firstLine}, ${purchase.shippingAddress.secondLine}`}
        </h6>
        <h6>
          {purchase.shippingAddress &&
            `${purchase.shippingAddress.county}, ${purchase.shippingAddress.city}, ${purchase.shippingAddress.postcode}`}
        </h6>
      </div>
      <div>
        <h4>Status</h4>
        <h6>purchased on: {purchase && purchaseDate.toLocaleString()}</h6>
      </div>
    </div>
  );
};
