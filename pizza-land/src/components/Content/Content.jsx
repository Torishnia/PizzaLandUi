import React from 'react';

import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import Products from '../Products/Products';
import style from './content.module.sass';

export default function Content() {
  return (
    <div>
      <Categories />
      <Sort />
      <h2>All pizzas</h2>
      <Products />
    </div>
  )
}
