import { React } from 'react';
import { Box } from '@chakra-ui/react';
import Button from '../button/button.component';

const CartDropdown = () => {

   

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
            zIndex='5'> 
        <Box h='240px' d='flex' direction='column' overflow='scroll' />
            <Button>Go to checkout</Button>

        </Box>
    )
}

export default CartDropdown;