import { React } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context';

import { Box } from '@chakra-ui/react';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {

   const { cartItems } = useContext(CartContext);
   const navigate = useNavigate();

   const goToCheckoutHandler = () => {
    navigate('/checkout')
   }

    return (
        <Box 
            pos='absolute' 
            w="240px" 
            h="340px" 
            d="flex" 
            direction="column" 
            p="20px" 
            bg='white' 
            border='1px' 
            top='90px' 
            right='40px' 
            zIndex='5'
            > 
            <Box h='240px' d='flex' direction='row' overflow='scroll'>
            {cartItems.length ? (
                cartItems.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))
              ) : (
                <span >Your cart is empty</span>
              )}
            </Box>
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>

        </Box>
    )
}

export default CartDropdown;