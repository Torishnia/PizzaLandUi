import React, { useState } from 'react';

import styles from './pizzaBlock.module.sass';

export default function PizzaBlock({ image, title, price, sizes, types }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typeNames = ['thin', 'traditional'];

  return (
    <div className={styles.pizza_block}>
      <img
        className={styles.pizza_block_image}
        src={image}
        alt='Pizza'
      />
      <h4 className={styles.pizza_block_title}>{title}</h4>
      <div className={styles.pizza_block_selector}>
        <ul>
          { types.map((type, i) => (
            <li 
              key={i} 
              onClick={() => setActiveType(i)} 
              className={activeType === i ? styles.active : ''}
            >
              {typeNames[type]}
            </li>
          )) }
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li 
              key={i} 
              onClick={() => setActiveSize(i)} 
              className={activeSize === i ? styles.active : ''}
            >
              {size} cm.
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.pizza_block_bottom}>
        <div className={styles.pizza_block_price}>{price} $</div>
        <div className={styles.button}>
          <button className={styles.button_add}>Add</button>
          {/* <button>Remove</button> */}
        </div>
      </div>
    </div>
  )
}
