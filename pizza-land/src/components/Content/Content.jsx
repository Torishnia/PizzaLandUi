import React from 'react';

import PizzaBlock from '../PizzaBlock/PizzaBlock';
import { pizzas } from '../../data';
import style from './content.module.sass';

export default function Content() {
  return (
    <div className={style.items}>
      { pizzas.map((pizza) => <PizzaBlock image={pizza.image} title={pizza.title} price={pizza.price}/>) }
    </div>
  )
}
