import { Suspense } from 'react'
import AppBar from '../AppBar/AppBar'
import Loader from '../Loader/Loader'
import css from './Layout.module.css'

const Layout = ({ children }) => {
    return (
    <>
        <AppBar />
            <Suspense fallback={<Loader />}>
               <main> {children} </main>
            </Suspense>
    </>
    
  )
}

export default Layout