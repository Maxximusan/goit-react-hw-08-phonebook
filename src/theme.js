import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette:{
        primary:{
            main: '#7FFFD4'
        },

        success: {
            main: '#00FF7F'
        }
    },

    customColors: {
        addContactsBackground: '#e1dc9161',
        test: '#00008B',
        testBackground: '#00FF7F',
        testHover: '#00FFFF',
    },

    customBorderRadius: {
        round: '50%',
        primary: '20px',
        standart: '4px',
        alternative: '0px 40px 40px 0px',
      },
})