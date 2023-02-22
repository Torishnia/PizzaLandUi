import React from 'react';

import style from './categories.module.sass';

export default function Categories() {
  return (
    <div className={style.categories}>
      <ul>
        <li className={style.active}>All</li>
        <li>Meat</li>
        <li>Vegetarian</li>
        <li>Grill</li>
        <li>Spicy</li>
      </ul>
    </div>
  )
}
