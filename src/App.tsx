import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';

import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { Care } from './pages/Care';

import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartDrawer } from './components/CartDrawer';

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/care" element={<Care />} />
            </Routes>
            <CartDrawer />
          </Layout>
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
