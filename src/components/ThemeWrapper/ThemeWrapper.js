import { ThemeProvider } from 'styled-components';
import { themeDark } from '../../theme/themeDark';
import { themeLight } from '../../theme/themeLight';
import { useSelector } from 'react-redux';
// import { theme } from '../../theme/theme';

export const themesOptions = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const ThemeWrapper = ({ children }) => {
  const activTheme = useSelector(state => state.theme);

  return (
    <ThemeProvider
      theme={activTheme === themesOptions.LIGHT ? themeLight : themeDark}
    >
      {children}
    </ThemeProvider>
  );
};
