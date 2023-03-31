import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import { selectFilter, setCategoryId, setFilters } from '../../redux/filter/slice';
import Categories from '../Categories/Categories';
import Sort, { sortList } from '../Sort/Sort';
import Products from '../Products/Products';
import styles from './content.module.sass';
import { fetchPizzas, selectPizzaData } from '../../redux/pizza/slice';
import { useAppDispatch } from '../../redux/store';

const Content: React.FC = () => { 
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { products, status } = useSelector(selectPizzaData);
  const { categoryId, sort, searchValue } = useSelector(selectFilter);
  const { sortProperty } = sort;

  const onChangeCategory = useCallback((i: number) => {
    dispatch(setCategoryId(i));
  }, [dispatch])

  const getPizzas = useCallback(async () => {
    const baseUrl = 'https://64021c7d3779a86262658057.mockapi.io';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortProperty.replace('-', '');
    const order = sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        baseUrl,
        category,
        sortBy,
        order,
        search,
      })
    );

    window.scrollTo(0, 0);
  }, [categoryId, dispatch, searchValue, sortProperty]);

  // // Якщо змінили параметри та був перший рендер
  // useEffect(() => {
  //   if (isMounted.current) {
  //     const params = {
  //       categoryId,
  //       sortProperty,
  //     }
  //     const queryString = qs.stringify(params);
  
  //     navigate(`?${queryString}`);
  //   }
  //   isMounted.current = true;
  // }, [categoryId, sortProperty, navigate])

  // // Якщо був перший рендер, то перевіряємо URL-параметри та зберігаємо в redux
  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));
  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);

  //     dispatch(
  //       setFilters({
  //         ...params,
  //         sort,
  //       }),
  //     );

  //     isSearch.current = true;
  //   }
  // }, [dispatch])

  //Якщо був перший рендер, то робимо запит на піци
  useEffect(() => {
    getPizzas();
  }, [categoryId, sortProperty, searchValue, getPizzas])

  return (
    <div>
      <Categories categoryValue={categoryId} onChangeCategory={onChangeCategory} />
      <Sort value={sort}/>
      <h2>All pizzas</h2>
      <Products products={products} isLoading={status} />
    </div>
  )
}

export default Content;
