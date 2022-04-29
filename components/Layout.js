import Nav from '../components/Nav'
import styles from '../styles/Layout.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout