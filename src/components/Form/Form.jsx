import {useState} from 'react'
import { nanoid } from 'nanoid';
// import Button from '@mui/material/Button';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import IconButton from '@mui/material/IconButton';

// import css from 'components/Form/Form.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../Redux/contacts/selectors'
import { addContact } from '../../Redux/contacts/operations'
import { Formm, Field, Input, Baton, IconBtnContainer} from 'components/Form/Form.styled'

export const Form = () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts)

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  

    const inputChange = (event) => {
    const { name, value } = event.target;
  
       switch (name) {
         case 'name':
           setName(value);
           break;
         
         case 'number':
           setNumber(value);
           break;
         
         default:
           return;
       }
    
  }

  const clearForm = () => {
    setName('');
    setNumber('')
   
    };

 
  
    const addContacts = ({ name, number }) => {
    
    const newContact = { id: nanoid(), name, number };
    const checkUser = contacts.find(
      (contact) => contact.name === newContact.name
    );

    checkUser
      ? alert(`${name} is already in the contacts`)
      : dispatch(addContact(newContact));
  };
  
  
  const formSubmit = (event) => {
    event.preventDefault();

    addContacts({ name, number })
    
    clearForm()
  }
    
    const nameInputId = nanoid();
   const  telInputId = nanoid()
    
 
  
        return (
            <Formm onSubmit={formSubmit} >
          <Field htmlFor={nameInputId} >
            Name:
             <Input
              id={nameInputId}     
              // label='FUCK'
              value={name}
              onChange={inputChange}
              name="name"
              type="text"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              
            />
          </Field>
          <Field htmlFor={telInputId} >
            Number:
            <Input
              id={telInputId}  
             
              value={number}
              onChange={inputChange}
              name="number"
              type="tel"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Field>

          {/* <Button  type="submit" color='success' variant="contained" size="small" >Add contact!</Button> */}
          <Baton type="submit">Add contact</Baton>
          <IconBtnContainer >
            <IconButton type="submit" aria-label="add contact" color="success"  size="medium">
                <AddIcCallIcon fontSize="large"/>
            </IconButton>
          </IconBtnContainer>
        </Formm>
        )
   
}