import { Box, Button } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/operations';
import { useAuth } from 'hooks';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box 
      sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1.5
    }}>
          <Box as='p' 
            sx={{
            fontWeight: 'bold'
          }}>
            Welcome, {user.name}
          </Box>
         <Button type="submit" color="secondary" variant="outlined" size="small" endIcon={<LogoutOutlinedIcon />} onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};
