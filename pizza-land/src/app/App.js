import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import styles from './app.module.sass';

function App() {
  return (
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
  );
}

export default App;
