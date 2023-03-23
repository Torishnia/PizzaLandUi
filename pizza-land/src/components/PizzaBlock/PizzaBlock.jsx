import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItem, selectCartItemById } from '../../redux/cart/slice';
import styles from './pizzaBlock.module.sass';

export default function PizzaBlock({ id, image, title, price, sizes, types }) {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typeNames = ['thin', 'traditional'];

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      image,
      type: typeNames[activeType],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  }

  return (
    <div className={styles.pizza_block}>
      <Link to={`pizza/${id}`}>
        <img
          className={styles.pizza_block_image}
          src={image}
          alt='Pizza'
        />
      </Link>
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
          <button onClick={onClickAdd} className={styles.button_add}>
            Add 
            {addedCount > 0 && <span>{addedCount}</span>}
          </button>
          {/* <button>Remove</button> */}
        </div>
      </div>
    </div>
  )
}
