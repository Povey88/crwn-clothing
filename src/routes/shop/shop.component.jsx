import { useContext } from 'react';
import { Grid } from '@chakra-ui/react';
import { ProductsContext } from '../../contexts/products.context';

import ProductCard from '../../components/product-card/product-card.component';


const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <Grid 
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(5, 2fr)" }}
        columnGap={{ base: "16px", lg: "24px" }}
        justifyItems="center"
        padding={{ base: "0 16px" }}
        paddingTop="30px"
        >
            {products.map(( product ) => ( 
                 <ProductCard key={product.id} product={product}/>
            ))}
        </Grid>
    )
}

export default Shop;