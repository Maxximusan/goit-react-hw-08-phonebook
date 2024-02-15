// import styled from '@emotion/styled'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


export const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  /* width: 507px; */
  alignItems: 'center',
  /* border: 1px solid; */
  border: 'none'
}))

export const Field = styled('label')(({ theme }) => ({
     marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',

}))

export const Input = styled('input')(({ theme }) => ({
     width: '350px',
     borderRadius: theme.customBorderRadius.standart,
  borderColor: 'rgb(0 0 0 / 0%)',
  outline: 'none',
  backgroundColor: theme.customColors.addContactsBackground,
}))

export const Baton = styled(Button)(({ theme }) => ({
   color: theme.customColors.test,
   backgroundColor: theme.customColors.testBackground,
   borderRadius: theme.customBorderRadius.secondary,

   '&:hover': {
    backgroundColor: theme.customColors.testHover,
    
  },

}))


