import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme.ts'

import '@fontsource/raleway/400.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
