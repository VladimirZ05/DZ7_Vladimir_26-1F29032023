import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './Navbar';
import ProductList from './ProductList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
