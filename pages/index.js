import Head from 'next/head'
import MainNavigation from '../components/layouts/MainNavigation'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Cyril James De Guzman</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavigation></MainNavigation>
      <section className={styles.main}>
        
      </section>
      <footer className={styles.footer}>
        Cyril James De Guzman © 2022
      </footer>
    </main>
  )
}