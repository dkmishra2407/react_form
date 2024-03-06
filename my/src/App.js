import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Product from './components/Product'; // Assuming you have a Product component
import { v4 as uuid } from 'uuid';

function App() {
  const initialProducts = [
    {
      id: uuid(),
      name: "JAY SHREE RAM",
      price:200,
      Description:"THIS IS A WATCH",
      imageUrl: "https://plus.unsplash.com/premium_photo-1681147547346-2d73c90988d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjB3YXRjaGVzfGVufDB8fDB8fHww",
    },
    {
      id: uuid(),
      name: "JAY SHREE MAHAKAL",
      price:200,
      Description:"THIS IS A WATCH",
      imageUrl: "https://plus.unsplash.com/premium_photo-1681147547346-2d73c90988d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjB3YXRjaGVzfGVufDB8fDB8fHww",
    },
    {
      id: uuid(),
      name: "JAY SHREE PARSHURAM",
      price:200,
      Description:"THIS IS A WATCH",
      imageUrl: "https://plus.unsplash.com/premium_photo-1681147547346-2d73c90988d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjB3YXRjaGVzfGVufDB8fDB8fHww",
    }
  ];

  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    setProducts([...products, product]);
  }

  return (
    <div className='App'>
      <Form addProduct={addProduct} />
      {products.map((product) => (
        <Product key={product.id} id={product.id} name={product.name} price={product.price} Description={product.Description} imageUrl={product.imageUrl}/>
      ))}
    </div>
  );
}

export default App;
