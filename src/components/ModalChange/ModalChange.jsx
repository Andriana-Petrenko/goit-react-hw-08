import { useDispatch} from 'react-redux';
import { changeContact} from '../../redux/contacts/operations';
import css from './ModalChange.module.css'
import { IoCloseSharp } from 'react-icons/io5';
import { useId } from 'react';
import { Toaster } from 'react-hot-toast';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";


const ContactFormSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});



const ModalChange = ({contact,setShowModalChange}) => {
    const contactId = contact.id;  
     
        
        const initialValues = {
 name: contact.name,
 number: contact.number,
};
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
 
  const handleSubmit = (values, actions) => {
      const updateContact = { ...values };
      dispatch(changeContact({ contactId, updateContact }));
      actions.resetForm();
    }
  
    return (
        <div className={css.backdrop}>
            <div className={css.modal}>
                <button type="button" className={css.close_button} onClick={() => setShowModalChange(false)}><IoCloseSharp /></button>
    <Toaster position="top-center" reverseOrder={false}/>
      <Formik initialValues={initialValues} onSubmit= {handleSubmit} validationSchema={ContactFormSchema}>
      <Form className={css.form}>
              <label htmlFor={nameFieldId}>Name</label>
              <Field type="text" name="name" id={nameFieldId} />
              <ErrorMessage className={css.error}  name="name" component="span" />
              <label htmlFor={numberFieldId}>Number</label>
              <Field type="tel" name="number" id={numberFieldId} />
              <ErrorMessage className={css.error} name="number" component="span" />
			<button  className={css.add_button} type="submit">Save contact</button>
                    </Form>
    </Formik>

          
  
                
          
    
        </div>
        </div>
  )
}

export default ModalChange