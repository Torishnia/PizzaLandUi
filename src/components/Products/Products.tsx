import React from 'react';
import { IProductsProps } from '../../interfaces';

import PizzaBlock from '../PizzaBlock/PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';
import styles from './products.module.sass';

const Products: React.FC<IProductsProps> = (props: IProductsProps) => {
  const { products, isLoading } = props;
  const pizzas = products.map((el) => <PizzaBlock key={el.id} {...el} />);
  const skeletons = [...new Array(products.length)].map((_, index) => <Skeleton key={index}/>);

  return (
    <div>
      {isLoading === 'error' ? (
        <div className={styles.error}>
          <h2>An error has occurred 😕</h2>
          <p>Unfortunately, it was not possible to get pizzas. Please try again later.</p>
        </div>
      ) : (
        <div className={styles.items}>
          {isLoading === 'loading' ? skeletons : pizzas}
        </div>
      )}
    </div>
  )
}

export default Products;