import { Box, ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme.ts'

import '@fontsource/raleway/400.css'
import Sidebar from '../components/Admin/Sidebar/Sidebar'
import {Provider, useSelector} from 'react-redux'
import store from '../components/Admin/store'
import "react-calendar/dist/Calendar.css";
import MobileSidebar from '../components/Admin/Sidebar/MobileSidebar'


function MyApp({ Component, pageProps }) {

  return (
  <Provider store={store} >
      <ChakraProvider theme={theme}>
      <Component {...pageProps} />
       <Box display={{base:"none", md:"inline"}}>
       <Sidebar/>
      
        </Box>
        <MobileSidebar/>
    </ChakraProvider>
  </Provider>
  )
}

export default MyApp
