import { Suspense } from 'react'
import AppBar from '../AppBar/AppBar'
import Loader from '../Loader/Loader'
import Footer from '../Footer/Footer'


const Layout = ({ children }) => {
    return (
    <>
        <AppBar />
            <Suspense fallback={<Loader />}>
          <main> {children} </main>
        </Suspense>
       <Footer />
        </>
    
    
  )
}

export default Layout