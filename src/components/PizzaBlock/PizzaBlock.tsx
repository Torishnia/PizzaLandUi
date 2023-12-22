import React from 'react';
import { Link } from 'react-router-dom';

import { IPizza } from '../../interfaces';
import PizzaType from '../PizzaType/PizzaType';
import styles from './pizzaBlock.module.sass';

const PizzaBlock: React.FC<IPizza> = (props: IPizza) => {
  const { id, image, title } = props;
  const count = 0;

  return (
    <div className={styles.pizza_block}>
      <Link to={`pizza/${id}`}>
        <img
          className={styles.pizza_block_image}
          src={image}
          alt='Pizza'
        />
        <h4 className={styles.pizza_block_title}>{title}</h4>
      </Link>
      {/* count={count} */}
      <PizzaType {...props } />
    </div>
  )
}

export default PizzaBlock;
