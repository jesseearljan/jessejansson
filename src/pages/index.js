import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React, { useRef } from "react"
import Typical from 'react-typical'
import styles from '../assets/styles/Home.module.scss'


export default function Home() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  const steps = [
    '', 4500,
    'Hi 👋', 3000,
    'My name is Jesse, a full-stack web developer 📚', 30000,
  ];
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Home - Jesse jansson</title>
        <meta name="description" content="Bekijk het portfolio van Jesse Jansson via jessejansson.com over (web)developer zijn" />
        <meta name="author" content="Jesse Jansson" />
        <meta name="keywords" content="Jesse, Jansson, Jesse Jansson, web developer, developer, 21 jaar, Rotterdam, Nederland, Nederlands, Netherlands, Holland, coding, programmeur, programmeren" />
        <meta name="application-name" content="Jesse Jansson" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jessejansson.com/" />
        <meta property="og:title" content="Jesse Jansson" />
        <meta property="og:description" content="Bekijk het portfolio van Jesse Jansson via jessejansson.com over (web)developer zijn" />
        <meta property="og:image" content="https://res.cloudinary.com/dhi2hmlmj/image/upload/v1629286996/ogpicture.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jessejansson.com/" />
        <meta property="twitter:title" content="Jesse Jansson" />
        <meta property="twitter:description" content="Bekijk het portfolio van Jesse Jansson via jessejansson.com over (web)developer zijn" />
        <meta property="twitter:image" content="https://res.cloudinary.com/dhi2hmlmj/image/upload/v1629286996/ogpicture.jpg" />
      </Head>
      
      <main className={styles.main}>
          <motion.div initial="visible" animate="hidden" 
            variants={{
              visible: {
                opacity: 1,
                pointerEvents: "auto",
                },
              hidden: {
                opacity: 0,
                pointerEvents: "none",
                transition: {
                  delay: 4
                }
              }
            }}
            style={{
              position: "absolute",
              display: "flex",
              minHeight: "100vh",
              minHeight: "-webkit-fill-available",
              top: "0",
              width: "100%",
              backgroundColor: "white",
              zIndex: 2,
            }}> 
              <lottie-player
                ref={ref}
                autoplay
                keepLastFrame
                src="https://assets7.lottiefiles.com/private_files/lf30_b8ldmnne.json"
                style={{ margin: "auto", width: "25rem", height: "25rem"}}
              />
          </motion.div>
          <div className={styles.title}>
            <Typical wrapper="h1" steps={steps} loop={Infinity} />
          </div>
          <div className={styles.BtnPlcmnt}>
                <Link href="/about">
                    <a className={styles.BtnStyl}>
                    Find out more
                    </a>
                </Link>
          </div>
          
      </main>
    </div>
  )
}
