// ПЕРЕНЕС В ЮЗЕР ЛИСТ
// import { useDispatch, useSelector } from 'react-redux'
// import {useEffect} from 'react'
// import { Form } from 'components/Form/Form'
// import { ContactList } from 'components/Contacts/Contacts'
// import { Filter } from 'components/Filter/Filter'
// import { getIsLoading, getError } from '../Redux/contacts/selectors'
// import { fetchContacts } from 'Redux/contacts/operations'
// import { Loader } from './Loader/Loader'

// import css from 'components/App.module.css'


import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout.jsx';
import { useDispatch } from 'react-redux'
import { refreshUser } from 'Redux/auth/operations.js';
import { useAuth } from './hooks/useAuth.js';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute'

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const UserContactsPage = lazy(() => import('../pages/UserContacts'));


export const App = () => {

  // ПЕРЕНЕС В USERLIST
  // const dispatch = useDispatch();                                      
  // const isloading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(fetchContacts())
  // },[dispatch])
  
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
      // <div className={css.container}>
      //   <header className={css.header}>
      //     <h1 className={css.header__title}>Phonebook</h1> - перенес в home, стили 3х классов пока не трогал
      //   </header>
    
    
      //   <div className={css.sectionsContainer}> ------------------- перенес все в userlist
      //     <section className={css.addList}>
      //       <h2 className={css.title}>Add Contact</h2>
      //      <Form  />
      //     </section>
      //     <section className={css.contactsList}>
      //       <h2 className={css.title}>Contacts</h2>
      //       <Filter />
      //       {isloading && !error && <Loader />}
      //       <ContactList />
      //     </section>
      //   </div>
      // </div>
      )
  

  
};
