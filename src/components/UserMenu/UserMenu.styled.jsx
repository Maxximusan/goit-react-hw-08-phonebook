import { styled } from '@mui/material/styles';

export const Greeting = styled('h4')(({ theme }) => ({
   
    fontWeight: theme.customFontWeight.medium,

    [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
        fontWeight: theme.customFontWeight.medium,
        fontSize: theme.spacing(3),
    },

    [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
        fontWeight: theme.customFontWeight.bold,
        fontSize: theme.spacing(5),
    }
  }))



export const  BtnContainer = styled('div')(({ theme }) => ({
    [theme.breakpoints.down(theme.breakpoints.values.mobileAdaptive)]: {
        display: 'none',
    }
}))

export const  IconBtnContainer = styled('div')(({ theme }) => ({
    [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
        display: 'none',
    }
}))