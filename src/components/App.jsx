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


import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout.jsx';


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
    
   
  return (
      

     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/usercontacts"  element={<UserContactsPage />} />
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
