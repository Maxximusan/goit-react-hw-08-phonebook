
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { Form } from 'components/Form/Form'
import { ContactList } from 'components/Contacts/Contacts'
import { Filter } from 'components/Filter/Filter'
import { getIsLoading, getError } from '../Redux/contacts/selectors'
import { fetchContacts } from 'Redux/contacts/operations'
import { Loader } from '../components/Loader/Loader'

import * as SC from 'pages/UserContacts.styles'


export default function UserContacts() {
    const dispatch = useDispatch();                                      
  const isloading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

    return (
          <SC.SectionsContainer >
           <SC.AddList >
             <SC.Title >Add Contact</SC.Title>
            <Form  />
           </SC.AddList>
          <SC.ContactsList >
             <SC.Title >Contacts</SC.Title>
             <Filter />
             {isloading && !error && <Loader />}
             <ContactList />
           </SC.ContactsList>
         </SC.SectionsContainer>
  );
}


