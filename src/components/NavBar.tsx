import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <div>
      <HStack boxSize="60px">
        <Image src={logo} alt="logo" />
        <Text>NavBar</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
