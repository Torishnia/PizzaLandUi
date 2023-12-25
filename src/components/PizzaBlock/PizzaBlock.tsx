import React from 'react';
import { Link } from 'react-router-dom';

import { IPizza } from '../../interfaces';
import PizzaType from '../PizzaType/PizzaType';
import styles from './pizzaBlock.module.sass';

const PizzaBlock: React.FC<IPizza> = (props: IPizza) => {
  const { id, title, logo } = props;  

  return (
    <div className={styles.pizza_block}>
      <Link to={`pizza/${id}`}>
        <img
          className={styles.pizza_block_image}
          src={logo}
          alt='Pizza'
        />
        <h4 className={styles.pizza_block_title}>{title}</h4>
      </Link>

      <PizzaType {...props} />
    </div>
  )
}

export default PizzaBlock;
