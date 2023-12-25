import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Categories from '../Categories/Categories';
import Sort, { SortArray } from '../Sort/Sort';
import Products from '../Products/Products';
import { fetchPizzas } from '../../redux/pizza/asyncActions';
import { useAppDispatch } from '../../redux/store';
import { selectPizzaData } from '../../redux/pizza/selectors';
import { selectCategoryData } from '../../redux/category/selectors';
import { fetchCategories } from '../../redux/category/asyncActions';
import { setCategoryId } from '../../redux/category/slice';
import { IPizza, ISort } from '../../interfaces';
import { E_StatusComponent } from '../../enums';

const Content: React.FC = () => {
  const dispatch = useAppDispatch();

  const { pizzas, pizzasStatus } = useSelector(selectPizzaData);
  const { categorySelectedId, categories, categoryStatus } = useSelector(selectCategoryData);

  const [search, setSearch] = useState('');
  const [{ sortBy, sortOrder, displayText }, setSort] = useState<ISort>(SortArray[0]);

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

  const onChangeSorting = useCallback((value: ISort) => {
    setSort(value);
    dispatch(fetchPizzas({
      categoryId: categorySelectedId,
      search,
      sortBy: value.sortBy,
      sortOrder: value.sortOrder,
    }));
  }, [dispatch]);

  useEffect(() => {
    getPizzas();
    getCategories();
  }, [getCategories, getPizzas]);

  // const onChangeSearch = useCallback((value: string) => {
  //   dispatch(fetchPizzas({ categoryId: categorySelectedId, search: value, sortBy, sortOrder }));
  // }, [dispatch]);

  // const navigate = useNavigate();
  
  // const isSearch = useRef(false);
  // const isMounted = useRef(false);

  // ------------------------------------------------------------------------------ 
  // console.log('categories >>> ', categories);
  
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
      {
        categoryStatus === E_StatusComponent.SUCCESS
          ? <Categories
              categorySelectedId={categorySelectedId}
              categories={categories}
              onChangeCategory={onChangeCategory}
            />
          : <div>Loading...</div>
      }
      
      <h2>All pizzas</h2>

      <Sort
        sortBy={sortBy}
        sortOrder={sortOrder}
        displayText={displayText}
        onChangeSorting={onChangeSorting}
      />
      {
        pizzasStatus === E_StatusComponent.SUCCESS
          ? (
            pizzas.length
              ? <Products pizzas={pizzas} pizzasStatus={pizzasStatus} />
              : <div>Pizzas not found</div>
          )
          : <div>Loading...</div>
      }
    </div>
  )
}

export default Content;
