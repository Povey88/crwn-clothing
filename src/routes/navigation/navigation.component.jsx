
import { Outlet, Link} from 'react-router-dom';
import { Fragment } from 'react';
import { Box, Flex, Image, Spacer } from "@chakra-ui/react"
import CrwnLogo from '../../assets/crown.svg'

// import { signOutUser } from '../../utils/firebase/firebase.utils';
// import { UserContext } from '../../contexts/user.context';

// import './navigation.styles.scss';

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  
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
              <Box p={2}>
                <Link cursor='pointer' to='/auth' color='BlackAlpha.300' variant='solid'>SIGN IN</Link>
              </Box>
          </Flex>
    </Flex>

        <Outlet />
   </Fragment>

   

  );
};

export default Navigation;