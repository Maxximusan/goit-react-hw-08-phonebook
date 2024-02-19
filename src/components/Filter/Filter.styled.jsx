// import styled from '@emotion/styled'
import { styled } from '@mui/material/styles';



export const Field = styled('label')(({ theme }) => ({

    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    }))
   


export const Input = styled('input')(({ theme }) => ({

      // width: '350px',
      minWidth: '150px',
      borderRadius: theme.customBorderRadius.standart,
      borderColor: 'rgb(0 0 0 / 0%)', 
      outline: 'none',
      backgroundColor: theme.customColors.addContactsBackgroundAlt,

      [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
        width: '180px',
    },
    [theme.breakpoints.up(theme.breakpoints.values.my1)]: {
      width: '220px',
  },
    [theme.breakpoints.up(theme.breakpoints.values.my2)]: {
      width: '250px',
  },
    [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
      width: '280px',
    },
    [theme.breakpoints.up(theme.breakpoints.values.my3)]: {
      width: '320px',
    },
    [theme.breakpoints.up(theme.breakpoints.values.my4)]: {
      width: '370px',
    },
    }))
  
  
    // border-color: rgba(0, 0, 0, 0);
  