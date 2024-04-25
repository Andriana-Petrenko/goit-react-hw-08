import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/contacts/selectors';

const SearchBox = () => {
     
    const dispatch = useDispatch();
    const filters = useSelector(selectNameFilter);
    const onChangeFilter = (event) => {
        dispatch(changeFilter(event.target.value))
  }

    return (
        <label className={css.filter}>Find your contacts
            <input className={css.query} type="text" value={filters} onChange={onChangeFilter}/></label> 
  )
}

export default SearchBox