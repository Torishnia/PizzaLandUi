import { useState, useEffect } from 'react';

import PizzaBlock from '../PizzaBlock/PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';
import style from './products.module.sass';

export default function Products() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://64021c7d3779a86262658057.mockapi.io/items')
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.items}>
      {isLoading
        ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
        : items.map((item) => <PizzaBlock key={item.id} {...item} />)
      }
    </div>
  )
}
