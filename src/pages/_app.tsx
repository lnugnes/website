import { GlobalStyle } from '@styles/global'
import type { AppProps } from 'next/app'
import Script from 'next/script'

import { Provider } from 'react-redux';
import { store } from '@redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalStyle/>
      <Script src='https://kit.fontawesome.com/4333430006.js'></Script>
    </Provider>
  )
}

export default MyApp
