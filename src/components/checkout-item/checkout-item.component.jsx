import './checkout-item.styles.scss'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import React from 'react'

const CheckoutItem = ( { cartItem  }) => {
    const { name, imageUrl, price, quantity } = cartItem; 

    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

    return (
        <Box className='checkout-item-container'>
            <Box className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </Box>
            <span className='name'>{name}</span>
            <span className='quantity'>
            <ChevronLeftIcon className='arrow' mt={2} h='30px' cursor='pointer' onClick={removeItemHandler}/>
                <span className='value'  >{quantity}</span>
            <ChevronRightIcon className='arrow' mt={2} h='30px' cursor='pointer' onClick={addItemHandler}/>
            </span>
            <span className='price'>{price}</span>
            <Box onClick={clearItemHandler} className='remove-button'>&#10005;</Box>
        </Box>
    )
}

export default CheckoutItem;
