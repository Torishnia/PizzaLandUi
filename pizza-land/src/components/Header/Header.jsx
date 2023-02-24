import React from 'react';

import { HiOutlineShoppingCart } from 'react-icons/hi';
import pizzaSlice from '../image/pizzaSlice.png';
import style from './header.module.sass';

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.container} >

        <div className={style.header_logo}>

          <div>
            <img src={pizzaSlice} alt="logo" />
          </div>

          <div>
            <h1>Pizza Land</h1>
            <p>The most delicious pizza in the Universe</p>
          </div>

        </div>
        
        <div className={style.header_cart}>
          <div className={style.cart_block}>
            <button><HiOutlineShoppingCart/></button>
            <div className={style.numberCart}>1</div>
          </div>
        </div>

      </div>
    </div>
  )
}
