import React, { useState } from 'react';

import style from './pizzaBlock.module.sass';

export default function PizzaBlock({ image, title, price, sizes, types }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typeNames = ['thin', 'traditional'];

  return (
    <div className={style.pizza_block}>
      <img
        className={style.pizza_block_image}
        src={image}
        alt='Pizza'
      />
      <h4 className={style.pizza_block_title}>{title}</h4>
      <div className={style.pizza_block_selector}>
        <ul>
          { types.map((type, i) => (
            <li 
              key={i} 
              onClick={() => setActiveType(i)} 
              className={activeType === i ? style.active : ''}
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
              className={activeSize === i ? style.active : ''}
            >
              {size} cm.
            </li>
          ))}
        </ul>
      </div>
      <div className={style.pizza_block_bottom}>
        <div className={style.pizza_block_price}>{price} $</div>
        <div className={style.button}>
          <button className={style.button_add}>Add</button>
          {/* <button>Remove</button> */}
        </div>
      </div>
    </div>
  )
}
