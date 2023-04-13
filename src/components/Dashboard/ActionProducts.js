import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { formField } from '../../UI/helpers';
import { ShoppingButtons } from '../../hooks/useButtons';
import classes from './ActionProducts.module.css';
import {
  deleteProductData,
  fetchEditSingleProductData,
} from '../../store/products-actions';

const ActionProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);

  const data = products.map((product, index) => {
    return <ActionForm key={index} data={product} />;
  });

  return data;
};

export default ActionProducts;

const ActionForm = (props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(props.data);
  const [disable, setDisable] = useState(true);
  const editHandler = () => setDisable(false);

  const changeProduct = (e) => {
    let name = e.target.name;
    if (name === 'Short Description') {
      name = 'shortDescription';
    } else if (name === 'Part number') {
      name = 'partNumber';
    }
    setData((state) => ({ ...state, [name]: e.target.value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchEditSingleProductData(data._id, data));
    setDisable(true);
  };
  const deleteHandler = () => {
    dispatch(deleteProductData(data._id));
  };

  return (
    <>
      <img src={data.img} alt={data} className={classes.image} />
      <form className={classes.form}>
        {formField('name', 'text', data.name, changeProduct, disable)}
        {formField(
          'Part number',
          'text',
          data.partNumber,
          changeProduct,
          disable
        )}
        {formField('type', 'text', data.type, changeProduct, disable)}
        {formField('image', 'text', data.img, changeProduct, disable)}
        {formField('color', 'text', data.color, changeProduct, disable)}
        {formField(
          'Short Description',
          'text',
          data.shortDescription,
          changeProduct,
          disable
        )}
        {formField('price', 'number', data.price, changeProduct, disable)}
        {formField('quantity', 'number', data.quantity, changeProduct, disable)}
        {formField('warranty', 'number', data.warranty, changeProduct, disable)}
      </form>
      <div>
        <ShoppingButtons
          content={disable ? 'edit' : 'confirm edit'}
          action={disable ? editHandler : submitHandler}
        />
        <ShoppingButtons content="delete" action={deleteHandler} />
      </div>
    </>
  );
};
