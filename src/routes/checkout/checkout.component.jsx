import { React } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../contexts/cart.context'

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, addItemToCart, removeCartItem, removeItemToCart, cartTotal } = useContext(CartContext);

    return (
      <Box className='checkout-container'>
          <Box className='checkout-header'>
              <Box className='header-block'>
                <span>Product</span>
              </Box>
              <Box className='header-block'>
                <span>Description</span>
              </Box>
              <Box className='header-block'>
                <span>Quantity</span>
              </Box>
              <Box className='header-block'>
                <span>Price</span>
              </Box>
              <Box className='header-block'>
                <span>Remove</span>
              </Box>
          </Box>

          {cartItems.map((cartItem) => (
                  <CheckoutItem key={cartItem.id} cartItem={cartItem} /> 
          ))}
            <span className='total'>Total: £{cartTotal}</span>
      </Box>
    )
  }
  
  export default Checkout;
  