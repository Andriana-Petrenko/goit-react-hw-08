import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import LoginForm from '../../components/LoginForm/LoginForm'
import { selectIsError, selectIsLoading } from '../../redux/auth/selectors';

const LoginPage = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  return (<>
    {loading && !error? <Loader />:<LoginForm />}
  </>
    
  )
}

export default LoginPage