import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CartProvider } from './components/CartContext';
import { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <CartProvider>
     <Toaster position="top-center" />
      <App />
    </CartProvider>
  </React.StrictMode>
);
