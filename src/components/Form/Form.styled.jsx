// import styled from '@emotion/styled'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


export const Formm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  border: 'none'
}))

export const Field = styled('label')(({ theme }) => ({
     
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(6),

}))

export const Input = styled('input')(({ theme }) => ({
     width: '350px',
     borderRadius: theme.customBorderRadius.standart,
  borderColor: 'rgb(0 0 0 / 0%)',
  outline: 'none',
  backgroundColor: theme.customColors.addContactsBackgroundAlt,
}))

export const Baton = styled(Button)(({ theme }) => ({
   color: theme.customColors.test,
   backgroundColor: theme.customColors.addBtnBackground,
   borderRadius: theme.customBorderRadius.secondary,

   '&:hover': {
    backgroundColor: theme.customColors.addBtnHover,
    
  },
  '&:focus': {
        
    backgroundColor: theme.customColors.addBtnHover,
  },

}))


