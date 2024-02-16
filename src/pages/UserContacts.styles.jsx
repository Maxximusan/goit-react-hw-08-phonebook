import { styled } from '@mui/material/styles';
import img from '../images/old-book.jpg'


export const SectionsContainer = styled('div')(({ theme }) => ({

    display: 'flex',
    backgroundColor: theme.customColors.backgroundAlt,
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '600px',
  
  }))


  export const AddList = styled('section')(({ theme }) => ({

    padding: theme.spacing(6),
    width: '550px'
  
  }))
 
  export const ContactsList = styled('section')(({ theme }) => ({

    padding: theme.spacing(6),
    width: '550px'
  
  }))
  
  
  export const Title = styled('h2')(({ theme }) => ({

    padding: theme.spacing(4),
    textAlign: 'center'
  
  }))
  
  