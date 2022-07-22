import { Image, Text, Box, AspectRatio } from '@chakra-ui/react';
import Button from '../button/button.component';


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    return (

        <Box mt={4} mb={4} w='300px' justify='center'>
            <AspectRatio maxW='560px' ratio={1}>
               <Image src={imageUrl} rounded='3xl' objectFit='cover' alt={`${name}`} />
            </AspectRatio> 
               <Text fontSize='sm'> {name}</Text> 
               <Text fontSize='sm'> £{price}</Text>
               <Button buttonType={'inverted'}>Add to basket</Button>  
        </Box>

)};

export default ProductCard;