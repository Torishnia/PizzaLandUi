import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';

import pizzaSlice from '../../assets/image/pizzaSlice.png';
import style from './header.module.sass';

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.container} >

        <Link to='/'>
          <div className={style.header_logo}>

            <div>
              <img src={pizzaSlice} alt="logo" />
            </div>

            <div>
              <h1>Pizza Land</h1>
              <p>The most delicious pizza in the Universe</p>
            </div>

          </div>
        </Link>
        <div className={style.header_cart}>
          <Link to='/cart'>
            <div className={style.cart_block}>
              <button><HiOutlineShoppingCart/></button>
              <div className={style.numberCart}>1</div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}
