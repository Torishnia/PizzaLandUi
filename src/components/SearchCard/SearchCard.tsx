import React from 'react';

import styles from './searchCard.module.sass';
import { IPizza } from '../../interfaces';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoryData } from '../../redux/category/selectors';
import { CategoryDisplayMapper } from '../Categories/Categories';

const SearchCard: React.FC<IPizza> = (props: IPizza) => {
  console.log('props >> ', props);
  const { id, title, logo, price, rating, categoryId } = props;
  const { categories } = useSelector(selectCategoryData);

  return (
    <Link to={`pizza/${id}`}>
      <div className={styles.container}>
        <div className={styles.pizza_logo}>
          <img src={logo} alt='pizza_logo'/>
        </div>

        <div className={styles.pizza_info}>
          <span><strong>Name: </strong>{title}</span>
          <br />
          <span><strong>Category: </strong>{CategoryDisplayMapper[categories.find((item) => item.id === categoryId)?.title ?? 'ALL']}</span>
          <br />
          <span><strong>Price: </strong>{price} $</span>
          <br />
          <span><strong>Rating: </strong>{rating} / 5</span>
        </div>
      </div>
    </Link>
  )
}

export default SearchCard;
