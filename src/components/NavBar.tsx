import { HStack, Image, useColorMode } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeToggle from './ColorModeToggle';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  useColorMode();
  return (
    <HStack padding={3}>
      <Image src={logo} alt="logo" boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
