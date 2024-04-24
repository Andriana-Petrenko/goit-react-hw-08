import './App.css'
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { lazy } from 'react';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from '../redux/auth/operations';
import NoFoundPage from '../pages/NoFoundPage/NoFoundPage';




const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

function App() { 
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(refreshUser());    
  }, [dispatch]);

  return (
  <>
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NoFoundPage/>}/>
      </Routes>
    </Layout>
      
  </>
  )
}

export default App
