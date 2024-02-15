
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { AddContacts } from 'components/Form/Form'
import { ContactList } from 'components/Contacts/Contacts'
import { Filter } from 'components/Filter/Filter'
import { getIsLoading, getError } from '../Redux/contacts/selectors'
import { fetchContacts } from 'Redux/contacts/operations'
import { Loader } from '../components/Loader/Loader'
import css from 'pages/UserContacts.module.css'


export default function UserContacts() {
    const dispatch = useDispatch();                                      
  const isloading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

    return (
          <div className={css.sectionsContainer}>
           <section className={css.addList}>
             <h2 className={css.title}>Add Contact</h2>
            <AddContacts  />
           </section>
          <section className={css.contactsList}>
             <h2 className={css.title}>Contacts</h2>
             <Filter />
             {isloading && !error && <Loader />}
             <ContactList />
           </section>
         </div>
  );
}