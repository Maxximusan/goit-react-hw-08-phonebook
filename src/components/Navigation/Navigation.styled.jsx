// import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';



export const Link = styled(NavLink)(({ theme }) => ({

    display: 'inline-block',
    textDecoration: 'none',
    padding: theme.spacing(2, 1),
    fontWeight: theme.customFontWeight.medium,
    color: theme.customColors.navigationLink,
    fontSize: theme.spacing(2),

    
    '&.active': {
      color: theme.customColors.nlActive
    },
    
      '&:hover': {
        textDecoration: 'underline'
      },

      // '&:focus': {
      //    backgroundColor: theme.customColors.nlFocus,
      // },
      [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
        padding: theme.spacing(3),
        fontSize: theme.spacing(3),
        },

    [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
      fontWeight: theme.customFontWeight.bold,
      fontSize: theme.spacing(5),
  }
    }))

  

 