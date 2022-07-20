import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.context';

import './index.scss';


const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
      <ChakraProvider >
         <App />
      </ChakraProvider>
     </UserProvider> 
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

