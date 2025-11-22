import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';

import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';

import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <CartDrawer />
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
