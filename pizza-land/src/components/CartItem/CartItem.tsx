import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { IPizzaToCart } from '../../interfaces';
import { addItem, minusItem, removeItem } from '../../redux/cart/slice';

import styles from './cartItem.module.sass';

type CartItemProps = {
  id: string;
  title: string;
  type: string;
  size: string;
  price: number;
  count: number;
  image: string;
}

export default function CartItem({ id, title, type, size, price, count, image }: CartItemProps) {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({id} as IPizzaToCart));
  }

  const onClickMinus = () => {
    dispatch(minusItem(id));
  }

  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to remove?')) {
      dispatch(removeItem(id));
    }
  }

  return (
    <div className={styles.content}>
      <div className={styles.content_item}>
        <img src={image} alt='Pizza'/>
        <div className={styles.content_item_description}>
          <h4>{title}</h4>
          <span>{type} {size} cm</span>
        </div>
      </div>

      <div className={styles.content_amount}>
        <button 
          disabled={count === 1} 
          className={count === 1 
            ? styles.content_amount_disabled 
            : styles.content_amount_button
          } 
          onClick={onClickMinus} 
        >
          <AiOutlineMinusCircle size={20} />
        </button>
        <span>{count}</span>
        <button 
          className={styles.content_amount_button} 
          onClick={onClickPlus} 
        >
          <AiOutlinePlusCircle size={20}/>
        </button>
      </div>

      <div className={styles.content_price}>{price * count} $</div>

      <div className={styles.content_remove}>
        <button onClick={onClickRemove} ><TiDeleteOutline size={25} /></button>
      </div>
    </div>
  )
}
