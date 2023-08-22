import { HStack, Image, useColorMode } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeToggle from './ColorModeToggle';
import SearchInput from './SearchInput';

const NavBar = () => {
  useColorMode();
  return (
    <HStack padding={3}>
      <Image src={logo} alt="logo" boxSize="60px" />
      <SearchInput />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
