import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => useMediaQuery({ query: '(max-width:767px)' });
export const useIsTablet = () => useMediaQuery({ query: '(max-width:1279px)' });
export const useIsDesktop = () =>
  useMediaQuery({ query: '(min-width:1280px)' });
