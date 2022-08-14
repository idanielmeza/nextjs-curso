import '../styles/globals.css'
import {NextPage} from 'next'
import { AppProps } from 'next/app'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactElement
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps } : AppPropsWithLayout) {	

  const getLayout = Component.getLayout || ((page) => page)

  // return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
