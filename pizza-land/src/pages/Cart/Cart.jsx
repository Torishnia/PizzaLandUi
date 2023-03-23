import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';

import styles from './cart.module.sass';
import CartItem from './CartItem';
import { clearItems, selectCart } from '../../redux/cart/slice';
import CartEmpty from '../../components/CartEmpty/CartEmpty';

export default function Cart() {
  const dispatch = useDispatch();
  const {totalPrice, items} = useSelector(selectCart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm('Remove cart?')) {
      dispatch(clearItems());
    }
  }

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_header}>

        <div className={styles.container_header_cart}>
          <div><HiOutlineShoppingCart size={23} /></div>
          <h2>Cart</h2>
        </div>

        <button 
          className={styles.container_header_trash} 
          onClick={onClickClear} 
        >
          <HiOutlineTrash size={22} />
        </button>
        
      </div>

      <div>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div className={styles.container_totalOrders}>
        <span>Pizzas: <b>{totalCount}</b></span>
        <span>Total: <b>{totalPrice} $</b></span>
      </div>

      <div className={styles.container_footer}>
        <Link to='/'>
          <button className={styles.container_footer_back}>&larr; Go back</button>
        </Link>
        <button className={styles.container_footer_pay}>Pay</button>
      </div>
    </div>
  )
}
