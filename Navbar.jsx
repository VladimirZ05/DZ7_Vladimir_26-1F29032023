import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector(state => state.cart);

  return (
    <nav>
      <span role="img" aria-label="Корзина">🛒</span> Корзина ({cart.length} товаров)
    </nav>
  );
};

export default Navbar;
