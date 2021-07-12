import {AppProps} from 'next/app'
import '../styles/globals.scss'
import '../styles/search.scss'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
