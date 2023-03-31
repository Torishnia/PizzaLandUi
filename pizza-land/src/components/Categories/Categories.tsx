import React from 'react';

import { ICategoryProps } from '../../interfaces';
import styles from './categories.module.sass';

const Categories: React.FC<ICategoryProps> = React.memo((props: ICategoryProps) => {
  const { categoryValue, onChangeCategory } = props;
  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy'];

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={categoryValue === i ? styles.active : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  )
})

export default Categories;
