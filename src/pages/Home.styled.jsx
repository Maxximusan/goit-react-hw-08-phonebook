import { styled } from '@mui/material/styles';
import img from '../images/girl_with_notebook_outdoor.jpg'

export const Container = styled('section')(({ theme }) => ({

    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
  
  }))

  export const MainTitle = styled('h1')(({ theme }) => ({

    fontWeight: theme.customFontWeight.medium,
    fontSize: theme.spacing(5),
    textAlign: 'center',
    paddingTop: theme.spacing(10),
    color: theme.customColors.h1,
    height: 'min-content',

    [theme.breakpoints.up(theme.breakpoints.values.mobileResponsive)]: {
        fontSize: theme.spacing(7),
    },

    [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
        fontSize: theme.spacing(9),
    }
  
  }))