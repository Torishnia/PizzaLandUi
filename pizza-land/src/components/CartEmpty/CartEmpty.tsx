import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

import Empty_cart from '../../assets/image/empty_cart.jpg';
import styles from './cartEmpty.module.sass';
import { useState } from 'react';

export default function CartEmpty() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false)
  }, 1500)

  return (
    <div className={styles.container}>
      <h2>Сart is empty</h2>
      { isLoading ? <Loader /> : <img src={Empty_cart} alt='Empty cart'/> }
      <p>To order a pizza, go to the home page</p>
      <Link to='/'>
        <button>&larr; Go back</button>
      </Link>
    </div>
  )
}
