import React from 'react';
import { Link } from 'react-router-dom';

import PizzaBlock from '../PizzaBlock/PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';
import styles from './products.module.sass';

export default function Products({ items, isLoading }) {
  const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>);

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
