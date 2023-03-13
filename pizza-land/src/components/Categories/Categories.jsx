import React from 'react';

import styles from './categories.module.sass';

export default function Categories({ value, onChangeCategory }) {
  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy'];

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? styles.active : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  )
}
