import { ThemeProvider } from 'styled-components';
import { themeDark } from 'theme/themeDark';
import { themeLight } from 'theme/themeLight';
import { useSelector } from 'react-redux';

export const ThemeWrapper = ({children}) => {
    const activTheme = useSelector( state => state.theme);


    
  
    return <ThemeProvider theme={activTheme==="light"? themeLight:themeDark }>{children}</ThemeProvider>
  }