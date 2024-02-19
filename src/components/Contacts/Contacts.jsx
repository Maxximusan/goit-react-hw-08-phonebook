import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton } from '@mui/material';

// import css from 'components/Contacts/Contacts.module.css'
import { getContacts, getFilter } from '../../Redux/contacts/selectors'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../Redux/contacts/operations'
import * as SC from 'components/Contacts/Contacts.styled'




export const ContactList = () => {
 const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
 
  const filter = useSelector(getFilter);

  
        const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter));
  


 

  return (
    <SC.List >
      {visibleContacts.map(({ id, name, number }) => (
        <SC.Item key={id} >
          <Box sx={{
            display: 'flex',
           justifyContent: 'space-between',
           alignItems: 'center'
                   }}>
            <p>
              <SC.ItemName >{name}: </SC.ItemName>
              <SC.ItemNumber >{number}</SC.ItemNumber>
            </p>
            <SC.BtnContainer>
              <Button  type="submit" color="error" variant="outlined" size="small" startIcon={<DeleteIcon />} onClick={() => dispatch(deleteContact(id))}>
               Delete
             </Button>
            </SC.BtnContainer>
            <SC.IconBtnContainer>
              <IconButton type="submit" aria-label="delete" color="error"  size="small" onClick={() => dispatch(deleteContact(id))}>
                <DeleteIcon fontSize="small"/>
              </IconButton>
            </SC.IconBtnContainer>
         </Box>
        </SC.Item>
      ))}
    </SC.List>
  );
};



ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  
};