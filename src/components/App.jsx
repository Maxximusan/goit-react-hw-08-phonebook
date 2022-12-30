
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout.jsx';
import { useDispatch } from 'react-redux'
import { refreshUser } from 'Redux/auth/operations.js';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute'

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const UserContactsPage = lazy(() => import('../pages/UserContacts'));


export const App = () => {

  
    const dispatch = useDispatch()
   const { isRefreshing } = useAuth()
  
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegisterPage />} redirectTo="/usercontacts" />
            } />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/usercontacts" />
            } />
          <Route
            path="/usercontacts"
            element={
              <PrivateRoute component={<UserContactsPage />} redirectTo="/login" />
            } />
      </Route>
    </Routes>
     
      )
  

  
};
