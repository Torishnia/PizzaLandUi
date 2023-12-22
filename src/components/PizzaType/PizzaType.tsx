import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { IPizza } from '../../interfaces';
// import { IPizza, IPizzaToCart } from '../../interfaces';
import { selectCartItemById } from '../../redux/cart/selectors';
import { addItem, minusItem, removeItem } from '../../redux/cart/slice';
import styles from './pizzaType.module.sass';
import { IPizza } from '../../interfaces';

const PizzaType: React.FC<IPizza> = (props: IPizza) => {
  const { id, image, title, price, sizes, types } = props;

  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(price);
  // const typeNames = ['thin', 'traditional'];
  const addedCount = cartItem ? cartItem.count : 0;

  const onAdd = () => {
    // const item: IPizza = {
    //   id,
    //   title,
    //   price,
    //   image,
    //   // type: typeNames[activeType],
    //   // size: sizes[activeSize],
    //   // count: 0,
    // };
    // dispatch(addItem(item));
  }

  const onClickRemove = () => {
    // dispatch(minusItem(id));
    // if (addedCount === 1) {
    //   dispatch(removeItem(id));
    // }
  }

  return (
    <div>
      <div className={styles.selector}>
        <ul>
          {
            types && types.map((item, index) => (
              <li
                key={index}
                className={activeType === index ? styles.active : ''}
                onClick={() => setActiveType(index)}
              >{ item.title }</li>
            ))
          }
        </ul>
        
        <ul>
          {
            sizes && sizes.map((item, index) => (
              <li
                key={index}
                className={activeSize === index ? styles.active : ''}
                onClick={() => {
                  setActiveSize(index)
                  setCurrentPrice(price * item.coefficient)
                }} 
              >{ item.title }</li>
            ))
          }
        </ul>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottom_price}>{currentPrice} $</div>

        {
          addedCount > 0 && (
            <button 
              onClick={onClickRemove} 
              className={styles.bottom_buttonRemove}
            >
              Remove
            </button>
          )
        }

        <button className={styles.bottom_buttonAdd} onClick={onAdd}>
          Add 
          {addedCount > 0 && <span>{addedCount}</span>}
        </button>
      </div>
    </div>
  )
}

export default PizzaType;