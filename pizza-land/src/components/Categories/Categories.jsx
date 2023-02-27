import React, { useState } from 'react';

import style from './categories.module.sass';

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  }

  return (
    <div className={style.categories}>
      <ul>
        {categories.map((value, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={activeIndex === i ? style.active : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  )
}
