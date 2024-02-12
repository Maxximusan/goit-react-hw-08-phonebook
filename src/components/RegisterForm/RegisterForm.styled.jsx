import styled from '@emotion/styled'
import TextField from '@mui/material/TextField';

export const MainContainer = styled.div`
     display: flex;
    align-items: center;
    flex-direction: column;
`
export const TittleContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
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
     display: flex;
    flex-direction: column;
    margin-bottom: 26px;
 `
  
  export const Buttonn = styled.button`
    width: 320px;
    padding: 3px;
    border-radius: 1em;
    border-color: green;
    &:hover,
    &:focus {
        background: rgb(46, 138, 34);
        /* background: aqua; */
    /* border: none; */
    /* border-color: rgb(82, 255, 59); */
    }

  `
  
  
  
  