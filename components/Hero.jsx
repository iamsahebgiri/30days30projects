import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Hero() {
  const colorHeading = useColorModeValue('blueGray.800', 'blueGray.100');
  const colorSubtitle = useColorModeValue('blueGray.500', 'blueGray.400');

  return (
    <>
      <Box as="section">
        <Box
          maxW="2xl"
          mx="auto"
          px={{ base: '6', lg: '8' }}
          py={{ base: '16', sm: '20' }}
          textAlign="center"
        >
          <Heading
            size="2xl"
            letterSpacing="tight"
            fontWeight="bold"
            color={colorHeading}
          >
            One project{' '}
            <Text as="span" color="amber.500">
              everyday
            </Text>
          </Heading>
          <Text mt="4" fontSize="md" color={colorSubtitle}>
            Create a project every day for a month. You can pick any libray and
            framework you like. It's meant to improve programming skills by
            building projects.
          </Text>
          <Button
            mt="8"
            as="a"
            href="https://github.com/iamsahebgiri/30days30projects/tree/main/public/project"
            colorScheme="amber"
            target="_blank"
            rel="noopener noreferer"
            _focus={{ boxShadow: 'none' }}
          >
            View source code
          </Button>
        </Box>
      </Box>
    </>
  );
}
