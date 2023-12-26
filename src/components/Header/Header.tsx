import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiOutlineShoppingCart } from 'react-icons/hi';

import { selectCart } from '../../redux/cart/selectors';
import pizzaSlice from '../../assets/image/pizzaSlice.png';
import Search from '../Search/Search';
import styles from './header.module.sass';


const Header: React.FC = () => {
  const { id } = useParams();
  const { items } = useSelector(selectCart);
  const location = useLocation();
  const isMounted = useRef(false);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items])

  return (
    <div className={styles.header}>
      <div className={styles.container} >

        <Link to='/'>
          <div className={styles.header_logo}>
            <img src={pizzaSlice} alt="logo" />
            <div>
              <h1>Pizza Land</h1>
              <p>The most delicious pizza in the Universe</p>
            </div>
          </div>
        </Link>

        { 
          location.pathname !== '/cart'
            && location.pathname !== `/pizza/${id}`
            && ( <Search /> )
        }

        <div className={styles.header_cart}>
          {
            location.pathname !== '/cart' && (
              <Link to='/cart'>
                <div className={styles.cart_block}>
                  <button><HiOutlineShoppingCart /></button>
                  <div className={styles.numberCart}>{totalCount}</div>
                </div>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Header;
