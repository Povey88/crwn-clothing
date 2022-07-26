import { useContext } from 'react';
import { Grid } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query'
import { ProductsContext } from '../../contexts/products.context';
import { extendTheme } from "@chakra-ui/react";
import ProductCard from '../../components/product-card/product-card.component';


const Shop = () => {

    const { products } = useContext(ProductsContext);

    const [IsNotSmallerScreen] = useMediaQuery("(min-width:600px)")

    return (
        <Grid
        w="100%"
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }}
        columnGap={{ base: "16px", lg: "24px" }}
        justifyItems="center"
        >
            {products.map(( product ) => ( 
                 <ProductCard key={product.id} product={product}/>
            ))}
        </Grid>
    )
}

export default Shop;