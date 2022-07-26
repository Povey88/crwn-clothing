
import { Outlet, Link} from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import CrwnLogo from '../../assets/crown.svg'

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

// import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
  return (

   <Fragment>
      <Flex h='50px' w='100%' d='flex' mb='25px'>
          
          <Flex pos='fixed' top='1rem' left='1rem'>
              <Link to='/'>
                <Image boxSize='40px' objectFit='cover' src={CrwnLogo} />
              </Link> 
          </Flex>
          <Flex pos='absolute' top='1rem' right='1rem' p='10px' fontSize='sm'>
              <Box p={2}>
                <Link cursor='pointer' to='/shop' color='BlackAlpha.300' variant='solid' >SHOP </Link>
              </Box>

                {currentUser ? (
                  <Box cursor='pointer' fontSize='sm' p={2} color='BlackAlpha.300' variant='solid' onClick={signOutUser}>
                    SIGN OUT 
                  </Box>
                ) : (
              <Box p={2}>
                <Link cursor='pointer' to='/auth' color='BlackAlpha.300' variant='solid'>SIGN IN</Link>
              </Box>
              )}
              <CartIcon />
          </Flex>
            {isCartOpen && <CartDropdown />}
    </Flex>

        <Outlet />
   </Fragment>

  );
};

export default Navigation;