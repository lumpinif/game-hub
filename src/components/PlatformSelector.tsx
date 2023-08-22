import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '../hooks/usePlatforms';
import { platform } from '../hooks/useGames';

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: platform | null;
}
const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, erros } = usePlatforms();

  if (erros) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'All Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
