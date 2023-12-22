import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import Categories from '../Categories/Categories';
import Sort, { sortList } from '../Sort/Sort';
import Products from '../Products/Products';
import { fetchPizzas } from '../../redux/pizza/asyncActions';
import { useAppDispatch } from '../../redux/store';
import { selectFilter } from '../../redux/filter/selectors';
import { selectPizzaData } from '../../redux/pizza/selectors';
// import { setCategoryId, setFilters } from '../../redux/filter/slice';
// import { ISearchPizzaParams } from '../../interfaces';
import styles from './content.module.sass';
// import PizzasService from '../../services/PizzaService';
import { selectCategoryData } from '../../redux/category/selectors';
import { fetchCategories } from '../../redux/category/asyncActions';
import { setCategoryId } from '../../redux/category/slice';

const Content: React.FC = () => {
  const { pizzas, pizzasStatus } = useSelector(selectPizzaData);
  const { categorySelectedId, categories, categoryStatus } = useSelector(selectCategoryData);

  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [sortOrder, setSortOrder] = useState('ASC');

  const dispatch = useAppDispatch();

  const getPizzas = useCallback(async () => {
    dispatch(fetchPizzas({ categoryId: categorySelectedId, search, sortBy, sortOrder }));
    window.scrollTo(0, 0);
  }, [dispatch]);

  const getCategories = useCallback(async () => {
    dispatch(fetchCategories());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const onChangeCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id));
    dispatch(fetchPizzas({ categoryId: id, search, sortBy, sortOrder }));
  }, [dispatch]);

  const onChangeSearch = useCallback((value: string) => {
    dispatch(fetchPizzas({ categoryId: categorySelectedId, search: value, sortBy, sortOrder }));
  }, [dispatch]);

  useEffect(() => {
    getPizzas();
    getCategories();
  }, []);


  // const navigate = useNavigate();
  
  // const isSearch = useRef(false);
  // const isMounted = useRef(false);

  // ------------------------------------------------------------------------------ 
  // console.log('categories >>> ', categories);
  const { sort, searchValue } = useSelector(selectFilter);
  // const { sortProperty } = sort;
  // ------------------------------------------------------------------------------

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await getPizzas();
  //     await getCategories();
  //   }

  //   fetchData();
  // }, [getCategories, getPizzas]);

  // ------------------------------------------------------------------------------

 // Якщо змінили параметри та був перший рендер
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

  // Якщо був перший рендер, то перевіряємо URL-параметри та зберігаємо в redux
  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as any;
  //     const sortObj = sortList.find((obj) => obj.sortProperty === params.sortBy);

  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         sort: sortObj || sortList[0],
  //       }),
  //     )

  //     isSearch.current = true;
  //   }
  // }, [dispatch])

  //Якщо був перший рендер, то робимо запит на піци
  // useEffect(() => {
  //   getPizzas();
  //   console.log('WWWWWW >>> ', pizzas);
    
  //   getCategories();
  // }, [categoryId, sortProperty, searchValue, getPizzas, getCategories]);

  return (
    <div>
      <Categories
        categorySelectedId={categorySelectedId}
        categories={categories}
        onChangeCategory={onChangeCategory}
      />
      <h2>All pizzas</h2>
      <Sort value={sort}/>
      {/* <Sort value={sort}/> */}
      
      {/* {
        pizzas.length && <Products pizzas={pizzas} isLoading={pizzasStatus} />
      } */}
    </div>
  )
}

export default Content;
