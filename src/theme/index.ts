import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from '@mui/material/styles'

const baseThemeOptions: ThemeOptions = {
  shape: {
    borderRadius: 8,
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#4746F5',
    },
    secondary: {
      main: '#171A21',
    },
  },
}

export const theme = responsiveFontSizes(createTheme(baseThemeOptions))
