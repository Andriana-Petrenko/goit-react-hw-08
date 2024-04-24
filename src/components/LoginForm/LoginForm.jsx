import css from './LoginForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import { login } from '../../redux/auth/operations';

const LoginFormSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const initialValues = {
    email: "",
    password: "",
};

const LoginForm = () => {
    const emailFieldId = useId();
    const passwordFieldId = useId();
     const dispatch = useDispatch();
 
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
    }
  return (
    <Formik initialValues={initialValues} onSubmit= {handleSubmit} validationSchema={LoginFormSchema}>
      <Form className={css.form}>
              <label htmlFor={emailFieldId}>Email</label>
              <Field type="email" name="email" id={emailFieldId} />
              <ErrorMessage className={css.error} name="password" component="span" />
              <label htmlFor={passwordFieldId}>Password</label>
              <Field type="password" name="password" id={passwordFieldId} />
              <ErrorMessage className={css.error} name="number" component="span" />
			<button  className={css.add_button} type="submit">Log in</button>
			</Form>
    </Formik>
  )
}

export default LoginForm