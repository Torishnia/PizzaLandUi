import React from 'react';

import PizzaBlock from '../PizzaBlock/PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';
import style from './products.module.sass';

export default function Products({ items, isLoading }) {
  return (
    <div className={style.items}>
      {isLoading
        ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
        : items.map((item) => <PizzaBlock key={item.id} {...item} />)
      }
    </div>
  )
}
