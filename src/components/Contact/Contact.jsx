import { FaUser } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"
import css from "./Contact.module.css"
import { useDispatch} from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { openModal } from "../../redux/contacts/slice"



const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  // const contactId = contact.id;
  
  const openModalWindow = () => {
    dispatch(openModal(contact.id));
  }

  return (<>
    <Toaster position="top-center" reverseOrder={false} />
    
   <li>
          <div className={css.wrapper_contact}>
            <h2><FaUser size="16"/> {contact.name}</h2>
            <p><FaPhone size="16"/> {contact.number}</p>
          </div>
      <button type="button" className={css.delete_button} onClick={openModalWindow}>Delete</button>
    </li>
    
  </>
  )
}

export default Contact