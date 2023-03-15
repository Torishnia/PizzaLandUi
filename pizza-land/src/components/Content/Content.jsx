import React, { useState, useEffect } from 'react';

import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import Products from '../Products/Products';
import styles from './content.module.sass';
import { SearchContext } from '../../app/App';

export default function Content() {
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({ 
    name:'popularity', 
    sortProperty: 'rating', 
  });

  useEffect(() => {
    setIsLoading(true);

    const baseUrl = 'https://64021c7d3779a86262658057.mockapi.io';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `${baseUrl}/items?${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  return (
    <div>
      <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
      <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      <h2>All pizzas</h2>
      <Products items={items} isLoading={isLoading} />
    </div>
  )
}
