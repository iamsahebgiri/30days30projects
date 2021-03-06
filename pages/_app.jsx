import { ChakraProvider } from '@chakra-ui/react';
import "../styles/fonts.css"
import customTheme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
