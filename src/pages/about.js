import Head from 'next/head'
import Image from 'next/image'
import Typical from 'react-typical'
import styles from '../assets/styles/About.module.scss'

export default function about() {
  const aboutSteps = [
    'Im Jesse Jansson a 21 year old dutch web developer 🌐', 500,
    'Im Jesse Jansson a 21 year old dutch web developer 🌐, I like making weird things with web technologies.', 2000,
    'Im Jesse Jansson a 21 year old dutch web developer 🌐, I like making weird things with web technologies. When not working or futzing around with code', 100,
    'Im Jesse Jansson a 21 year old dutch web developer 🌐, I like making weird things with web technologies. When not working or futzing around with code, I study how to escape from School 🏃‍♂️💨'
  ];
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>About - Jesse jansson</title>
        <meta name="description" content="Alles over Jesse Jansson, gevestigd in Hillergersberg/Schiebroek Rotterdam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.aboutBanner}>
          <div className={styles.aboutHero}>
            <h1>About me</h1>
          </div>
          <div className={styles.aboutText}>
            <Typical wrapper="p" steps={aboutSteps} loop={1} />
          </div>
        </div>
      </main>
    </div>
  )
}
