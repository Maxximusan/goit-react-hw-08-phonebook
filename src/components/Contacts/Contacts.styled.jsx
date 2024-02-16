// import styled from '@emotion/styled'
import { styled } from '@mui/material/styles';


export const List = styled('ol')(({ theme }) => ({

    paddingLeft: theme.spacing(8),
  }))
 

export const Item = styled('li')(({ theme }) => ({

  padding: theme.spacing(1),
}))




export const ItemName = styled('span')(({ theme }) => ({

  color: theme.customColors.contactName,
  fontFamily: theme.customFontFamily.contactName,

}))
   


export const ItemNumber = styled('span')(({ theme }) => ({

  color: theme.customColors.contactNumber,
  fontFamily: theme.customFontFamily.contactNumber,
  

  
}))


// '&:hover': {
//   backgroundColor: theme.customColors.deleteBtn,
  
// },
// '&:focus': {
      
//   backgroundColor: theme.customColors.deleteBtnAlt,
// },
