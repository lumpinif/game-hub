import { Icon, HStack } from '@chakra-ui/react';
import { platform } from '../hooks/useGames';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from 'react-icons/fa';
import { AiFillAndroid } from 'react-icons/ai';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo, SiNintendoswitch } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons/lib';

interface Props {
  platform: platform[];
}
const PlatformIconList = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    android: AiFillAndroid,
    ios: MdPhoneIphone,
    linux: FaLinux,
    nintendo: SiNintendo,
    nintendoSwitch: SiNintendoswitch,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1.5}>
      {platform.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
