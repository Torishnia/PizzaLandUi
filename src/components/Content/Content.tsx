import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Categories from '../Categories/Categories';
import Sort, { SortArray } from '../Sort/Sort';
import Products from '../Products/Products';
import { fetchPizzas } from '../../redux/pizza/asyncActions';
import { useAppDispatch } from '../../redux/store';
import { selectPizzaData } from '../../redux/pizza/selectors';
import { selectCategoryData } from '../../redux/category/selectors';
import { setCategoryId } from '../../redux/category/slice';
import { ISort } from '../../interfaces';
import { E_StatusComponent } from '../../enums';

const Content: React.FC = () => {
  const dispatch = useAppDispatch();

  const { pizzas, pizzasStatus } = useSelector(selectPizzaData);
  const { categorySelectedId, categories, categoryStatus } = useSelector(selectCategoryData);

  const [{ sortBy, sortOrder, displayText }, setSort] = useState<ISort>(SortArray[0]);

  const getPizzas = useCallback(async () => {
    dispatch(fetchPizzas({ categoryId: categorySelectedId, search: '', sortBy, sortOrder }));
  }, [dispatch, categorySelectedId, sortBy, sortOrder]);

  const onChangeCategory = useCallback((id: number) => {
    dispatch(fetchPizzas({ categoryId: id, search: '', sortBy, sortOrder }));
    dispatch(setCategoryId(id));
  }, [dispatch, sortBy, sortOrder]);

  const onChangeSorting = useCallback((value: ISort) => {
    setSort(value);
    dispatch(fetchPizzas({
      categoryId: categorySelectedId,
      search: '',
      sortBy: value.sortBy,
      sortOrder: value.sortOrder,
    }));
  }, [dispatch, categorySelectedId]);

  useEffect(() => {
    getPizzas().catch((e) => console.error(e.message));
  }, [getPizzas]);

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
