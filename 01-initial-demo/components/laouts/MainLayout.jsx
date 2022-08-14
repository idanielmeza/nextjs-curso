import Head from 'next/head'
import Navbar from '../Navbar'
import styles from './MainLayout.module.css'

const MainLayout = ({children}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact Page</title>
                <meta name="description" content="Contact page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default MainLayout