import { FaUser } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"
import css from "./Contact.module.css"
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contacts/operations'
import { Toaster } from 'react-hot-toast'


const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const contactId = contact.id;
  const deletePhoneNumber = () => {
    dispatch(deleteContact(contactId))
    
  }

  return (<>
    <Toaster position="top-center" reverseOrder={false}/>
   <li>
          <div className={css.wrapper_contact}>
            <h2><FaUser size="16"/> {contact.name}</h2>
            <p><FaPhone size="16"/> {contact.number}</p>
          </div>
      <button type="button" className={css.delete_button} onClick={deletePhoneNumber}>Delete</button>
    </li>
  </>
  )
}

export default Contact