// import styled from '@emotion/styled'
import { styled } from '@mui/material/styles';



export const Field = styled('label')(({ theme }) => ({

    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    }))
   


export const Input = styled('input')(({ theme }) => ({

      width: '350px',
      borderRadius: theme.customBorderRadius.standart,
      borderColor: 'rgb(0 0 0 / 0%)', 
      outline: 'none',
      backgroundColor: theme.customColors.addContactsBackgroundAlt,
    }))
  
  
    // border-color: rgba(0, 0, 0, 0);
  