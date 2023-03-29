import React from 'react';
import { Link } from 'react-router-dom';

import Empty_cart from '../../assets/image/empty_cart.jpg';
import styles from './cartEmpty.module.sass';

export default function CartEmpty() {
  return (
    <div className={styles.container}>
      <h2>Сart is empty</h2>
      <img src={Empty_cart} alt='Empty cart'/>
      <p>To order a pizza, go to the home page</p>
      <Link to='/'>
        <button>&larr; Go back</button>
      </Link>
    </div>
  )
}
