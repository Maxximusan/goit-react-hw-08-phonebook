import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <Box sx={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
     <CssBaseline />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};
