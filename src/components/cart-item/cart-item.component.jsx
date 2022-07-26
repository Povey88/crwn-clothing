
import { Box, Image, Spacer } from '@chakra-ui/react'

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <Box pos='relative' fontSize={12}>
      <Image h='100px' w='50%' mr={2} mb={2} src={imageUrl} alt={`${name}`} /> 
      <Box pos='absolute' mr={3} w='35%' top='20px' right={1}>
        <span>{name}</span>
        <Spacer />
        <span>
          {quantity} x £{price}
        </span>
      </Box>
    </Box>
  );
};

export default CartItem;