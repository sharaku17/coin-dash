import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {Provider} from 'next-auth/client'
import {UserCryptoProvider} from '../contexts/UserCryptoContext'




function MyApp({ Component, pageProps }) {
    console.log(pageProps)
  
    return (
      
      <Provider session={pageProps.session}>
      <UserCryptoProvider>
          <Component {...pageProps} />

      </UserCryptoProvider>
      </Provider>
    )
  
}

export default MyApp
