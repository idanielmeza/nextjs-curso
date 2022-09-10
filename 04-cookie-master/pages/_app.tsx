import { useState,useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import {darkTheme, lightTheme, customTheme} from '../themes'
import Cookies from 'js-cookie'

interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps, theme='dark' }: Props) {

  const [themeState, setThemeState] = useState(lightTheme);
  
  useEffect(() => {

    const cookieTheme = Cookies.get('theme') || 'dark';
    const currentTheme = cookieTheme === 'light' ? lightTheme : cookieTheme === 'dark' ? darkTheme : customTheme;

    setThemeState(currentTheme);

  }, [themeState]);

 

  return (
    <ThemeProvider theme={themeState}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
    
  )
}

// MyApp.getInitialProps = async(appContext: AppContext)=>{

//   const {theme} = appContext.ctx.req ? ( appContext.ctx.req as any).cookies : {theme: 'light'};

//   const validThemes = ['light', 'dark', 'custom'];


//   return{
//     theme: validThemes.includes(theme) ? theme : 'light'
//   }

// }


export default MyApp
