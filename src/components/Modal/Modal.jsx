import { IoCloseSharp } from "react-icons/io5";
import { useDispatch} from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Modal.module.css'



const Modal = ({contact,setShowModal}) => {
    const contactId = contact.id;
    const dispatch = useDispatch();
    const deletePhoneNumber = () => {
        dispatch(deleteContact(contactId))   
        
  }
    return (
        <div className={css.backdrop}>
            <div className={css.modal}>
                <button type="button" className={css.close_button} onClick={() => setShowModal(false)}><IoCloseSharp /></button>
                <p className={css.modal_title}>{`Do you want to delete ${contact.name}?`}</p>
                <div className={css.wrapper}>
                    <button type="button" className={css.delete_button} onClick={deletePhoneNumber}>Yes</button>
                    <button type="button" className={css.delete_button} onClick={() => setShowModal(false)} >No</button>
                </div>
          
    
        </div>
        </div>
  )
}

export default Modal