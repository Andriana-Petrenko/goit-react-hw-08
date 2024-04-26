import { Helmet } from 'react-helmet-async'
import css from './HomePage.module.css'

const HomePage = () => {
  return (
   <>
      <Helmet>
          <title>Home Page</title>
        </Helmet>
      <div className={css.wrapper}>
            <h1 className={css.title}>Connect with your contacts </h1>
            <div className={css.image}></div>
      </div>
   </>
  )
}

export default HomePage