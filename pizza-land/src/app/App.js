import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import styles from './app.module.sass';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
