import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import { Image, Text, Box, AspectRatio, Spacer } from '@chakra-ui/react';
import { customTheme } from '../../theme'


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product); 

    return (

        <Box
          width="100%"
          fontFamily='fantasy'
          p={3}
          fontSize={['sm', 'md', 'lg', 'xl']}
          alignItems='center'
          mr={{ base: 3, sm: 5}}   
          pos='relative'     
          >
            <AspectRatio maxW='560px' minW='100%' ratio={1}>
               <Image src={imageUrl} rounded='3xl' objectFit='cover' alt={`${name}`} />
            </AspectRatio> 
               <Text> {name}</Text>
               <Text> £{price} </Text>
               <Button buttonType={'inverted'} onClick={addProductToCart}>Add to basket</Button>  
        </Box>

)};

export default ProductCard;