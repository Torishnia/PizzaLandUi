import React from 'react';

import pizzaMexico from '../image/Mexico.jpg';
import style from './pizzaBlock.module.sass';

export default function PizzaBlock() {
  return (
    <div className={style.pizza_block}>
      <img
        className={style.pizza_block_image}
        src={pizzaMexico}
        alt='Pizza'
      />
      <h4 className={style.pizza_block_title}>Mexico</h4>
      <div className={style.pizza_block_selector}>
        <ul>
          <li className={style.active}>thin</li>
          <li>traditional</li>
        </ul>
        <ul>
          <li className={style.active}>26 cm.</li>
          <li>30 cm.</li>
          <li>40 cm.</li>
        </ul>
      </div>
      <div className={style.pizza_block_bottom}>
        <div className={style.pizza_block_price}>10 $</div>
        <div className={style.button}>
          <button className={style.button_add}>Add</button>
          {/* <button>Remove</button> */}
        </div>
      </div>
    </div>
  )
}
