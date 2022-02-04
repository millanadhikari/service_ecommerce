import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme.ts'

import '@fontsource/raleway/400.css'
import Sidebar from '../components/Admin/Sidebar/Sidebar'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Sidebar/>
    </ChakraProvider>
  )
}

export default MyApp
