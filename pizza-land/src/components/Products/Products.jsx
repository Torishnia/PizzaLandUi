import { useState, useEffect } from 'react';

import PizzaBlock from '../PizzaBlock/PizzaBlock';
import style from './products.module.sass';

export default function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://64021c7d3779a86262658057.mockapi.io/items')
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr);
    });
  }, []);

  return (
    <div className={style.items}>
      { items.map((item) => 
        <PizzaBlock key={item.id} {...item} />
      ) }
    </div>
  )
}
