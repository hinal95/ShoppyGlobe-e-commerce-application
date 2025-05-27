
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import ProductList from './components/ProductList'

const ProductDetail = React.lazy(() => import('./components/ProductDetail'));
const Cart = React.lazy(() => import('./components/Cart'));
const NotFound = React.lazy(() => import('./components/NotFound'));

const App = () => (
  <Router>
    <Header/>
    <Suspense fallback={<div>loading....</div>}>
    <Routes>
      <Route path='/' element={<ProductList/>}></Route>
      <Route path='/product/:id' element={<ProductDetail/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>

    </Suspense>
  </Router>
)

export default App