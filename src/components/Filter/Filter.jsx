import { Box } from '@mui/material';

// import css from 'components/Filter/Filter.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../Redux/contacts/slice'
import { getFilter } from '../../Redux/contacts/selectors'
import { Field, Input} from 'components/Filter/Filter.styled'
 
  
export const Filter = () => {
const dispatch = useDispatch();
  const filter = useSelector(getFilter);

    return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
     
      
    }}>
      <Field >
        Find contact by Name
        <Input
          
            type="text"
          value={filter}
          onChange={event => dispatch(filterChange(event.target.value))}
        />
            </Field>
     </Box>
  );
}



