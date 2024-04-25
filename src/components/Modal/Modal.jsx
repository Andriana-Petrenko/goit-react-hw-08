
import { useDispatch} from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Modal.module.css'
import { closeModal } from '../../redux/contacts/slice';


const Modal = ({contactId}) => {
    
    const dispatch = useDispatch();
    const deletePhoneNumber = () => {
        dispatch(deleteContact(contactId))   
        
  }
  return (
      <div>
          <p>Do you want to delete contact?</p>
          <button type="button" className={css.delete_button} onClick={deletePhoneNumber}>Yes</button>
          <button type="button" className={css.delete_button} onClick={()=>{dispatch(closeModal())}} >No</button>
    </div>
  )
}

export default Modal