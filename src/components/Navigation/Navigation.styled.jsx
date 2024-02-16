// import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';



export const Link = styled(NavLink)(({ theme }) => ({

    display: 'inline-block',
    textDecoration: 'none',
    padding: theme.spacing(3),
    fontWeight: theme.customFontWeight.bold,
    color: theme.customColors.navigationLink,
  

    
    '&.active': {
      color: theme.customColors.nlActive
    },
    
      '&:hover': {
        textDecoration: 'underline'
      },

      '&:focus': {
        
        backgroundColor: theme.customColors.nlFocus,
      },
      
    }))

  

 