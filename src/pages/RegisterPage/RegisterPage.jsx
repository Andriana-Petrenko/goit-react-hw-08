import { useSelector } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import { selectIsError, selectIsLoading } from '../../redux/auth/selectors';
import Loader from '../../components/Loader/Loader';

const RegisterPage = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  return (<>
    {loading && !error ? <Loader />:<RegistrationForm />}
  </>
    
  )
}

export default RegisterPage