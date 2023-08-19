import { Switch, useColorMode, HStack, Text } from '@chakra-ui/react';

const ColorModeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <Text>
        {colorMode.toString().charAt(0).toUpperCase() +
          colorMode.toString().slice(1)}{' '}
        mode
      </Text>
    </HStack>
  );
};

export default ColorModeToggle;
