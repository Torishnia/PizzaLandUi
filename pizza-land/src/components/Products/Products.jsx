import React from 'react';

import PizzaBlock from '../PizzaBlock/PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';
import styles from './products.module.sass';

export default function Products({ items, isLoading }) {
  return (
    <div className={styles.items}>
      {isLoading
        ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
        : items.map((item) => <PizzaBlock key={item.id} {...item} />)
      }
    </div>
  )
}
