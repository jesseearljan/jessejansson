import Head from 'next/head'
import Image from 'next/image'
import styles from '../assets/styles/Projects.module.scss'

export default function about() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Jesse Project App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Project <a href="https://jessejansson.com">Jessejansson.com!</a>
        </h1>
      </main>
    </div>
  )
}
