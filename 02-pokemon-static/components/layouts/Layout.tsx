import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { Navbar } from "../ui"

interface LayoutProps {
    title?: string
    children: PropsWithChildren<{}>["children"]
}


const origin = typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"

export const Layout: FC <LayoutProps> = ({children, title}) => {

    
    

  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='author' content='Daniel Ledezma'/>
            <meta name='description' content={`Informacion sobre el pokemon ${title}`}/>
            <meta name='keywords' content={`${title}, pokemon, pokedex`}/>

            <meta property="og:title" content={`Informacion sobre ${title}`} />
            <meta property="og:description" content={`Pagina sobre ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <Navbar/>

        <main style={{
            padding: '0 20px'
        }}>
            {children}
        </main>

    </>
  )
}
