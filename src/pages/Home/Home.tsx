import React, { useCallback, useEffect } from 'react';

import Sliders from '../../components/Sliders/Sliders';
import Content from '../../components/Content/Content';
import { fetchCategories } from '../../redux/category/asyncActions';
import { useAppDispatch } from '../../redux/store';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  
  const getCategories = useCallback(async () => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    getCategories().catch((e) => console.error(e.message));
  }, [getCategories]);

  return (
    <div>
      <Sliders />
      <Content />
    </div>
  )
}

export default Home;