import React from 'react';

import { IPizzaSliceState } from '../../interfaces';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import styles from './products.module.sass';

const Products: React.FC<IPizzaSliceState> = (props: IPizzaSliceState) => {
  const { pizzas } = props;

  return (
    <div className={styles.items}>
      {
        pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)
      }
    </div>
  )
}

export default Products;
