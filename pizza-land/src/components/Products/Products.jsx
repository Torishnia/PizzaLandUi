import React from 'react';

import PizzaBlock from '../PizzaBlock/PizzaBlock';
import { pizzas } from '../../data';
import style from './products.module.sass';

export default function Products() {
  return (
    <div className={style.items}>
      { pizzas.map((pizza) => 
        <PizzaBlock key={pizzas.id} {...pizza} />
      ) }
    </div>
  )
}
