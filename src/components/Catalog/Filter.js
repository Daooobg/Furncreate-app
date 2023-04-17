import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavigationButtons } from '../../hooks/useButtons';

import { productsActions } from '../../store/products-slice';
import { formatPrice, getUniqueValues } from '../../UI/helpers';
import classes from './Filter.module.css';

const Filter = () => {
  const data = useSelector((state) => state.products);
  const products = data.products;
  const category = data.filters.category;
  const color = data.filters.colors;
  const categories = getUniqueValues(products, 'type');
  const colors = getUniqueValues(products, 'color');
  const { min_price, max_price, price } = data.filters;
  const dispatch = useDispatch();
  const updateFiltersHandler = (e) => {
    let name = e.target.name;
    let value = e.target.textContent;
    if (name === 'price' || name === 'color') {
      value = e.target.value;
    }
    dispatch(
      productsActions.updateFiltersValue({
        name,
        value,
      })
    );
    dispatch(productsActions.filter());
  };

  return (
    <div>
      <div className="form-control">
        <h4>Category</h4>
        <div>
          {categories.map((c, index) => {
            return (
              <NavigationButtons
                key={index}
                action={updateFiltersHandler}
                content={c}
                name="category"
                category = {category === c.toLowerCase()}
              />
            );
          })}
        </div>
      </div>

      <div>
        <h4>Colors</h4>
        <select
          name="color"
          value={color}
          className={classes.select}
          onChange={updateFiltersHandler}
        >
          {colors.map((c, index) => {
            return (
              <option value={c} key={index}>
                {c}
              </option>
            );
          })}
        </select>
      </div>
      <div className={classes["form-control"]}>
        <h5>Price</h5>
        <p className="price">{formatPrice(price)}</p>
        <input
          type="range"
          name="price"
          onChange={updateFiltersHandler}
          min={min_price}
          max={max_price}
          value={price}
        />
      </div>
      <Link to="create">
      <NavigationButtons content="create" />
      </Link>
    </div>
  );
};

export default Filter;
