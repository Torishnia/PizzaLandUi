import React from 'react';

import style from './categories.module.sass';

export default function Categories({ value, onChangeCategory }) {
  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy'];

  return (
    <div className={style.categories}>
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? style.active : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  )
}
