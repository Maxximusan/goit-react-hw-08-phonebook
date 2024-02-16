// import styled from '@emotion/styled'
import { styled } from '@mui/material/styles';

export const Header = styled('header')(({ theme }) => ({

display: 'flex',
justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(5),
  borderBottom: theme.customBorders.primary,
}))

