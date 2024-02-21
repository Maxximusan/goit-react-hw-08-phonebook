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
  marginBottom: theme.spacing(2),
  fontSize: theme.spacing(3),

  [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
    marginBottom: theme.spacing(6),
    fontSize: theme.spacing(5),
    },

}))

export const Input = styled('input')(({ theme }) => ({
    //  width: '350px',
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

  [theme.breakpoints.down(theme.breakpoints.values.mobileAdaptive)]: {
    display: 'none',
}

}))


export const  IconBtnContainer = styled('div')(({ theme }) => ({
    [theme.breakpoints.up(theme.breakpoints.values.mobileAdaptive)]: {
        display: 'none',
    }
  }))