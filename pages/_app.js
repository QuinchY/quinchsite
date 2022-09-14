import Head from 'next/head'
import MainNavigation from '../components/layouts/MainNavigation'
import Footer from '../components/layouts/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cyril James De Guzman</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
      </Head>
      <MainNavigation />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
