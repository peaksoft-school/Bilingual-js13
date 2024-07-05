import { createTheme, ThemeOptions } from '@mui/material/styles';

export const palette = {
  primary: {
    main: '#3A10E5',
    white: '#FFFFFF',
    lightBlue: '#D7E1F8',
    charcoal: '#4C4859',
  },
  secondary: {
    main: '#F61414',
    green: '#2AB930',
    lightGray: '#D4D0D0',
    mediumGray: '#D8D9DB',
    veryLightGray: '#F7F7F7',
    purple: '#70719a',
    blue: '#0F85F1',
    darkGray: '#757575',
    inActiveColor: '#C4C4C4',
    gray: '#9A9A9A',
  },
  linear: {
    linearBlue: 'linear-gradient(270deg, #3A10E5 0%, #6746EF 75.83%)',
    linearPink: 'linear-gradient(270deg, #C23677 0%, #C5397A 30%, #C43879 65%, #BB2E6F 100%)',
  },
};

export const typography = {
  fontFamily: 'Poppins, Gilroy',
};

const themeOptions: ThemeOptions = {
  palette: palette,
  typography: typography,
};

export const theme = createTheme(themeOptions);
