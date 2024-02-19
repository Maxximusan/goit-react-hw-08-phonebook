import { Box, Button, IconButton } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/operations';
import { useAuth } from 'hooks';
import { Greeting, BtnContainer, IconBtnContainer } from 'components/UserMenu/UserMenu.styled'


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box 
      sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2,
    }}>
          <Greeting  >
            Welcome, {user.name}
          </Greeting >

       <BtnContainer>
         <Button type="submit" color="secondary" variant="outlined" size="small" endIcon={<LogoutOutlinedIcon />} onClick={() => dispatch(logOut())}>
             Logout
         </Button>
      </BtnContainer>

      <IconBtnContainer>
        <IconButton aria-label="logout" size="small" color="secondary" type="submit" onClick={() => dispatch(logOut())}>
          <LogoutOutlinedIcon  fontSize="small"/>
        </IconButton>
      </IconBtnContainer>
    </Box>
  );
};
