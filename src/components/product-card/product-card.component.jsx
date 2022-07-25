import { Image, Text, Box, AspectRatio, useMediaQuery } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import Button from '../button/button.component';


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    return (

        <Box
          width="100%"
          p={3}
          justify='center'
          alignItems='center'
          mr={{ base: 3, sm: 5}}         
          >
            <AspectRatio maxW='560px' minW='100%' ratio={1}>
               <Image src={imageUrl} rounded='3xl' objectFit='cover' alt={`${name}`} />
            </AspectRatio> 
               <Text fontSize={['sm', 'md', 'lg', 'xl']}> {name}</Text> 
               <Text fontSize={['sm', 'md', 'lg', 'xl']}> £{price}</Text>
               <Button buttonType={'inverted'}>Add to basket</Button>  
        </Box>

)};

export default ProductCard;