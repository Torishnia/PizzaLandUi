import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import { setCategoryId, setFilters } from '../../redux/filter/slice';
import Categories from '../Categories/Categories';
import Sort, { sortName } from '../Sort/Sort';
import Products from '../Products/Products';
import { SearchContext } from '../../app/App';
import styles from './content.module.sass';

export default function Content() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sort } = useSelector((state) => state.filter);
  const { sortProperty } = sort;

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  }

  // Якщо змінили параметри та був перший рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty,
        categoryId,
      });
  
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  },  [categoryId, sortProperty, navigate])

  // Якщо був перший рендер, то перевіряємо URL-параметри та зберігаємо в redux
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortName.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );

      isSearch.current = true;
    }
  }, [dispatch])

  // Якщо був перший рендер, то робимо запит на піци
  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      setIsLoading(true);

    const baseUrl = 'https://64021c7d3779a86262658057.mockapi.io';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortProperty.replace('-', '');
    const order = sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `${baseUrl}/items?${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    }

    isSearch.current = false;
  }, [categoryId, sortProperty, searchValue])

  return (
    <div>
      <Categories value={categoryId} onChangeCategory={onChangeCategory} />
      <Sort />
      <h2>All pizzas</h2>
      <Products items={items} isLoading={isLoading} />
    </div>
  )
}
