import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiOutlineShoppingCart } from 'react-icons/hi';

import pizzaSlice from '../../assets/image/pizzaSlice.png';
import Search from '../Search/Search';
import styles from './header.module.sass';

export default function Header() {
  const { items } = useSelector(state => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className={styles.header}>
      <div className={styles.container} >

        <Link to='/'>
          <div className={styles.header_logo}>

            <div>
              <img src={pizzaSlice} alt="logo" />
            </div>

            <div>
              <h1>Pizza Land</h1>
              <p>The most delicious pizza in the Universe</p>
            </div>

          </div>
        </Link>
        <Search />
        <div className={styles.header_cart}>
          <Link to='/cart'>
            <div className={styles.cart_block}>
              <button><HiOutlineShoppingCart /></button>
              <div className={styles.numberCart}>{totalCount}</div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}
