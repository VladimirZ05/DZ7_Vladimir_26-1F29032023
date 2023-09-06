import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './cartSlice.jsx';
import products from './products.json';

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>Список товаров</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>КУПИТЬ</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
