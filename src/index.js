import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { CartProvider } from './contexts/cart.contexts';
import { ProductsProvider } from './contexts/products.context';

import './index.scss';


const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
         <CartProvider>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </CartProvider>
      </ProductsProvider>
     </UserProvider> 
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

