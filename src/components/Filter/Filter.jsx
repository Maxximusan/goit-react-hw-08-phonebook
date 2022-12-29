// import PropTypes from 'prop-types';
import css from 'components/Filter/Filter.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../Redux/contacts/slice'
import { getFilter } from '../../Redux/contacts/selectors'

 
  
export const Filter = () => {
const dispatch = useDispatch();
  const filter = useSelector(getFilter);

    return (
      <div className={css.filterContainer}>
      <label className={css.field}>
        Find contact by Name
        <input
          className={css.field__input}
            type="text"
          value={filter}
          onChange={event => dispatch(filterChange(event.target.value))}
        />
            </label>
            </div>
  );
}



// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onFilterChange: PropTypes.func.isRequired,
// };