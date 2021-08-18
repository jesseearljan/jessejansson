import Head from 'next/head'
import Link from 'next/link'
import Typical from 'react-typical'
import React, { useRef } from "react"
import styles from '../assets/styles/About.module.scss'

export default function About() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
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
        <div className={styles.footer}>
            <div className={styles.previous}>
              <Link href="/">
              <lottie-player
                ref={ref}
                autoplay
                loop
                speed="0.75"
                src="https://assets1.lottiefiles.com/packages/lf20_5raeqww9.json"
                style={{ marginLeft: "1rem", transform: "rotate(90deg)", width: "5rem", height: "5rem"}}
              />
              </Link>
            </div>
            <div className={styles.next}>
              <Link href="/projects">
              <lottie-player
                ref={ref}
                autoplay
                loop
                speed="0.75"
                src="https://assets1.lottiefiles.com/packages/lf20_5raeqww9.json"
                style={{ marginRight: "1rem", transform: "rotate(-90deg)", width: "5rem", height: "5rem"}}
              />
              </Link>
            </div>
          </div>
      </main>
    </div>
  )
}
