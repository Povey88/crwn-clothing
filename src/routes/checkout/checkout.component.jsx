import { React } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context'

const Checkout = () => {
    const { cartItems, addItemToCart } = useContext(CartContext);

    return (
      <Box>
          <Text>
             Checkout Page
          </Text>
          <br />
          <Box>
          {cartItems.map((cartItem) => {
                const { id, name, quantity } = cartItem;

                return (
                <Box key={id}>
                    <Text>{name}</Text>
                    <Text>{quantity}</Text>
                    <br />
                    <Text onClick={() => addItemToCart(cartItem)}>Increase</Text>
                    <Text>Decrease</Text>
                    <br />
                </Box>
                );
            })}
          </Box>
      </Box>
    )
  }
  
  export default Checkout
  