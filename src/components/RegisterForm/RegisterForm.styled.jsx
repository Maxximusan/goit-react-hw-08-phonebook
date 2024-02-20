import { styled } from '@mui/material/styles';
import {TextField , FormControl, Box, Paper}from '@mui/material';
import { Link } from 'react-router-dom';


export const MainContainer = styled(Paper)(({ theme }) => ({

    display: 'flex',
    flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '500px',

      margin: theme.spacing(0, 'auto'),
      padding: theme.spacing(8, 0),
      
    }))
    
  

export const TittleContainer = styled(Box)(({ theme }) => ({
   
    marginBottom: theme.spacing(8),
  }))
 
export const Title = styled('h2')(({ theme }) => ({
   
  fontWeight: theme.customFontWeight.extraLight,
  fontFamily: theme.customFontFamily.authTittle,
}))

   

  export const Formm = styled('form')(({ theme }) => ({
   
    maxWidth: '320px'
  }))
     
 
 
 export const Input = styled(TextField)(({ theme }) => ({
   
  width: '100%',
  marginBottom: theme.spacing(7),
}))
    
  
export const InputFormControl = styled(FormControl)(({ theme }) => ({
   
  width: '100%',
  marginBottom: theme.spacing(7),
}))
 

  
  
export const RegisterOrLoginBox = styled('p')(({ theme }) => ({
   
  textAlign: 'center',
  marginTop: theme.spacing(8),
}))



export const RegisterOrLoginLink = styled(Link)(({ theme }) => ({
  color: theme.customColors.authLink
 
}))
