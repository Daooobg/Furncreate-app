import { useDispatch, useSelector } from 'react-redux';

import { productsActions } from '../../store/products-slice';
import classes from './Sort.module.css';

const Sort = ({ products }) => {
  const dispatch = useDispatch();

  const sort = useSelector((state) => state.products.sort);
  const filteredText = useSelector((state) => state.products.filters.text);

  const sortProductsHandler = (e) => {
    dispatch(productsActions.sortAllProducts(e.target.value));
  };

  const filteredTextHandler = (e) => {
    dispatch(
      productsActions.updateFiltersValue({
        name: e.target.name,
        value: e.target.value,
      })
    );
    dispatch(productsActions.filter());
  };

  return (
    <div className={classes.container}>
      <div>
        <div className="form-control">
          <input
            type="text"
            name="text"
            placeholder="Search by name"
            className={classes["search-input"]}
            value={filteredText}
            onChange={filteredTextHandler}
          />:
        </div>
      </div>
      <hr className={classes.dashed} />
      <h4>{products.filteredProducts.length} Products found</h4>
      <hr className={classes.dashed} />

      <form>
        <label htmlFor="sort">Sort by</label>
        <select
          name="sort"
          id="sort"
          className={classes["sort-input"]}
          value={sort}
          onChange={sortProductsHandler}
        >
          <option value="empty">------</option>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
          <option value="new">date (newest)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
