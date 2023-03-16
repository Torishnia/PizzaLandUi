import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId } from '../../redux/slices/filterSlice';
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import Products from '../Products/Products';
import { SearchContext } from '../../app/App';
import styles from './content.module.sass';

export default function Content() {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  }

  useEffect(() => {
    setIsLoading(true);

    const baseUrl = 'https://64021c7d3779a86262658057.mockapi.io';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';
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
      <Categories value={categoryId} onChangeCategory={onChangeCategory} />
      <Sort />
      <h2>All pizzas</h2>
      <Products items={items} isLoading={isLoading} />
    </div>
  )
}
