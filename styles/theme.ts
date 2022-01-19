import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#7b68ee',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}


export const theme = extendTheme({ 
    colors, 
    config,
    components:{
    Steps,
} })