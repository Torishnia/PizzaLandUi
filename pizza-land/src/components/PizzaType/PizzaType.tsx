import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IPizza, IPizzaToCart } from '../../interfaces';
import { selectCartItemById } from '../../redux/cart/selectors';
import { addItem } from '../../redux/cart/slice';
import styles from './pizzaType.module.sass';

const PizzaType: React.FC<IPizza> = (props: IPizza) => {
  const { id, image, title, price, sizes, types } = props;

  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typeNames = ['thin', 'traditional'];

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: IPizzaToCart = {
      id,
      title,
      price,
      image,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  }

  return (
    <div>
      <div className={styles.selector}>
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
      <div className={styles.bottom}>
        <div className={styles.bottom_price}>{price} $</div>
        <div className={styles.bottom_button}>
          <button onClick={onClickAdd} className={styles.bottom_button_add}>
            Add 
            {addedCount > 0 && <span>{addedCount}</span>}
          </button>
          {/* <button>Remove</button> */}
        </div>
      </div>
    </div>
  )
}

export default PizzaType;