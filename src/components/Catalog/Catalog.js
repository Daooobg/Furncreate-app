import { useSelector } from 'react-redux';

import Filter from './Filter';
import FurnitureList from './FurnitureList';

import classes from './Catalog.module.css';
import Sort from './Sort';

const Catalog = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className={classes.container}>
      <section className={classes['container-search']}>
        <Filter />
      </section>
      <div>
        <Sort products={products} />
        <hr />
        <FurnitureList />
      </div>
    </div>
  );
};

export default Catalog;
