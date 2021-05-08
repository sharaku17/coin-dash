import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {Provider} from 'next-auth/client'




function MyApp({ Component, pageProps }) {
    console.log(pageProps)
  
    return (
      
      <Provider session={pageProps.session}>
          <Component {...pageProps} />
      </Provider>
    )
  
}

export default MyApp
