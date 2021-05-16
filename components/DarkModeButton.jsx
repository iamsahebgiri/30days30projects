import { Box, Icon, IconButton, useColorMode } from '@chakra-ui/react';
import { HiMoon, HiSun } from 'react-icons/hi';

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box position="fixed" top="4" right="4">
      <IconButton
        onClick={toggleColorMode}
        rounded="full"
        colorScheme="amber"
        aria-label="Toggle dark mode"
        icon={<Icon h="6" w="6" as={colorMode === 'light' ? HiMoon : HiSun} />}
        _focus={{ boxShadow: 'none' }}
      />
    </Box>
  );
};

export default DarkModeButton;
