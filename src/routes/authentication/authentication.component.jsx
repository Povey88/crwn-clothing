import { Box, Flex } from '@chakra-ui/react'
import { customTheme } from '../../theme'

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <Flex p={5} justify='center'>
        <Box fontSize={{ base: '24px', md: '30px', sm: '10px', lg: '40px'}}>
          <SignInForm />
        </Box>
        <Box  justify='center' ml="100px">
          <SignUpForm />
        </Box>
    </Flex>
  );
};

export default Authentication;