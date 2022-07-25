import { React } from 'react';
import { Box, Text } from '@chakra-ui/react';

const CartItem = ({ CartItem }) => {
    const { name, quantity } = CartItem;

    return( 
        <Box>
            <Text>{name}</Text>
            <span>{quantity}</span>
        </Box>
    )
}

export default CartItem;