import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import MainLayout from '../layouts/MainLayout';

const Cart = React.lazy(() => 
  import(/* webpackChunkName: "Cart" */ '../pages/Cart/Cart')
);
const FullPizza = React.lazy(() => 
  import(/* webpackChunkName: "FullPizza" */ '../pages/FullPizza/FullPizza')
);
const NotFound = React.lazy(() => 
  import(/* webpackChunkName: "NotFound" */ '../pages/NotFound/NotFound')
);

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
          <Route path='' element={<Home />}/>
          <Route 
            path='cart' 
            element={
              <React.Suspense fallback={<div>Loading cart...</div>}>
                <Cart />
              </React.Suspense>
            }
          />
          <Route 
            path='pizza/:id' 
            element={
              <React.Suspense>
                <FullPizza />
              </React.Suspense>
            }
          />
          <Route 
            path='*' 
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <NotFound />
              </React.Suspense>
            }
          />
      </Route>
    </Routes>
  );
}

export default App;
