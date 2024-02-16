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
    
   spacing: [0, 4, 10, 12, 15, 16, 20, 26, 30, 48, 85],
  

    customColors: {
        addContactsBackground: '#e1dc9161',
        addContactsBackgroundAlt: '#d3cb4f61',
        test: '#00008B',
        addBtnBackground: '#00ff7f8f',
        addBtnHover: '#00ffff6b',
        contactName: 'rgb(27, 27, 87)',
        contactNumber: 'rgb(90, 42, 221)',
        authLink: '#1976d2',
        navigationLink: '#2a363b',
        nlActive: '#e84a5f',
        nlFocus:'#f3c4a6',
        h1: 'rgb(253, 236, 82)',    
        backgroundAlt: '#b2c1f6',
        deleteBtn: '#ff6347',
        deleteBtnAlt: 'rgb(255, 59, 59)',
        authBtn: 'rgb(46, 138, 34)',
        authBtnAlt: 'rgb(82, 255, 59)'
    },

    

  

    customBorderRadius: {
        round: '50%',
        primary: '20px',
        secondary: '1em',
        standart: '4px',
        alternative: '0px 40px 40px 0px',
      },

      customBorders: {
        primary: '1px solid #2a363b',
        
      },

      customFontFamily: {
        contactName: 'Fira sans, sans-serif',
        contactNameAlt: 'Fira sans',
        contactNumber: 'Menlo, monospace',
        contactNumberAlt: 'Menlo',
        authTittle: 'Helvetica Neue, san-serif',
        authTittleAlt: 'Helvetica Neue',

        standart: 'sans-serif',
        alternative: 'monospace',
      },

      customFontWeight: {
        extraLight:200,
        normal: 400,
        medium: 500,
        bold: 700,
        heavy: 900,
      },
})

//  width \ heigt 
// 320px; 350px; 550px; 600px; 100%