import styled from '@emotion/styled'

export const List = styled.ol`
    padding-left: 30px;
`

export const Item = styled.li`
     padding: 4px;
`

export const ItemContainer = styled.div`
     display: flex;
  justify-content: space-between;
`

export const ItemName = styled.span`
    color: rgb(27, 27, 87);
  font-family: 'Fira sans', sans-serif;
`

export const ItemNumber = styled.span`
   color: rgb(90, 42, 221);
  font-family: 'Menlo, monospace';
`

export const ItemButton = styled.button`
   border-radius: 1em;
  border-color: tomato;
  &:hover,
  &:focus {
    background: rgb(255, 59, 59);
  
  border-color: rgba(255, 59, 59, 0.884);
  }
`