import styled from '@emotion/styled'
import {TextField , FormControl, Box, Paper}from '@mui/material';
import { Link } from 'react-router-dom';

export const MainContainer = styled(Paper)`
     display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
    padding: 30px 0;
`
export const TittleContainer = styled(Box)`
    /* display: flex;
    justify-content: center;
    flex-direction: column; */
    
    margin-bottom: 30px;
`
 
export const Title = styled.h2`
    font-weight: 200;
    font-family: Helvetica Neue, san-serif;
`
  export const Formm = styled.form`
     width: 320px;
  `
 
 export const Input = styled(TextField)`
     /* display: flex;
    flex-direction: column; */
    width: 100%;
    margin-bottom: 26px;
 `
  export const InputFormControl = styled(FormControl)`
    width: 100%;
    margin-bottom: 26px;
  `


//   export const Buttonn = styled.button`
//     width: 320px;
//     padding: 3px;
//     border-radius: 1em;
//     border-color: green;
//     &:hover,
//     &:focus {
//         background: rgb(46, 138, 34);
//         /* background: aqua; */
//     /* border: none; */
//     /* border-color: rgb(82, 255, 59); */
//     }
//   `
  
  
  
export const RegisterOrLoginBox = styled.p`
margin-top: 30px;
text-align: center;
`;

export const RegisterOrLoginLink = styled(Link)`
color: #1976d2;
`;