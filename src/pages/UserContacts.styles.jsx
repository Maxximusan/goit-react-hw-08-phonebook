import { styled } from '@mui/material/styles';
import img from '../images/old-book.jpg'


export const SectionsContainer = styled('div')(({ theme }) => ({

    display: 'flex',
    justifyContent: 'center',
    
    backgroundColor: theme.customColors.backgroundAlt,
    backgroundImage: `url(${img})`,
    // backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // minHeight: '600px',
    backgroundSize: '100% 100%',


    
  }))


  export const AddList = styled('section')(({ theme }) => ({

    padding: theme.spacing(6),
    // width: '550px'
    // maxWidth: '450px',

    [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
        padding: theme.spacing(6, 3),
        maxWidth: '250px',
    },

    [theme.breakpoints.up(theme.breakpoints.values.my2)]: {
        maxWidth: '290px',
    },
      [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
        maxWidth: '320px',
      },
      [theme.breakpoints.up(theme.breakpoints.values.my3)]: {
        maxWidth: '360px',
      },
      [theme.breakpoints.up(theme.breakpoints.values.my4)]: {
        maxWidth: '410px',
      },

    [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
        maxWidth: '450px'
     },
  
  }))
 
  export const ContactsList = styled('section')(({ theme }) => ({

    padding: theme.spacing(6),
    // width: '550px'
    // maxWidth: '450px',

    [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
        padding: theme.spacing(6, 3),
        maxWidth: '220px',
    },
    [theme.breakpoints.up(theme.breakpoints.values.my1)]: {
        maxWidth: '260px',
    },
    [theme.breakpoints.up(theme.breakpoints.values.my2)]: {
        maxWidth: '290px',
    },
      [theme.breakpoints.up(theme.breakpoints.values.tablet)]: {
        maxWidth: '320px',
      },
      [theme.breakpoints.up(theme.breakpoints.values.my3)]: {
        maxWidth: '360px',
      },
      [theme.breakpoints.up(theme.breakpoints.values.my4)]: {
        maxWidth: '410px',
      },

    [theme.breakpoints.up(theme.breakpoints.values.desktop)]: {
        maxWidth: '450px'
     },
  }))
  
  
  export const Title = styled('h2')(({ theme }) => ({

    padding: theme.spacing(4),
    textAlign: 'center'
  
  }))
  
  