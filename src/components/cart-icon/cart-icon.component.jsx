import { ReactComponent as ShoppingIcon } from '../../assets/shopping-cart.svg'
import { Box, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'



const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <Box cursor='pointer' pos='relative' d='flex' w='30px' ml={2} justify='center' alignItems='center' onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <Text pos='absolute' top='50%' left='50%' transform='translate(-50%, -50%)' fontSize='10px'
            >{cartCount}</Text>
        </Box>
    )
}

export default CartIcon; 