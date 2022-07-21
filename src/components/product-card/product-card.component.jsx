import { Image, Text, Grid, GridItem } from '@chakra-ui/react';
import Button from '../button/button.component';


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={6} ml={3}>
           
            <GridItem mb={4}>
               <Image src={imageUrl} alt={`${name}`} />
               <Text fontSize='sm'>{name}</Text>
               <Text fontSize='sm'>£{price}</Text> 
               <Button buttonType={'inverted'}>Add to basket</Button>
            </GridItem>
        </Grid>
)};

export default ProductCard;