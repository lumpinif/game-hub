import { HStack, Image, useColorMode } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeToggle from './ColorModeToggle';

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justifyContent={'space-between'} padding="16px">
      <Image src={logo} alt="logo" boxSize="60px" />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
