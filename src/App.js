import './App.css';
import React, { useEffect, useState } from 'react';
import { client } from './services/contentful.service';
import ProductContainer from './components/Product-container';

function App() {
  const [products, setProducts] = useState([]);
  const [contentType, setContenType] = useState('2PqfXUJwE8qSYKuM0U6w8M');

  useEffect(() => {
    const fetchProduct = async () => {
      await client.getEntries({ content_type: contentType }).then((data) => {
        setProducts(data.items);
      });
    };

    fetchProduct();
  }, [contentType]);

  console.log(products)

  return (
    <div className='App'>
      <div className='container'>
        <header>
          <h1>Products Hello</h1>
        </header>
        <main className='products'>
          <ProductContainer products={products} />
        </main>
      </div>
    </div>
  );
}

export default App;
