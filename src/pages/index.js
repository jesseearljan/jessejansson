import Head from 'next/head'
import Image from 'next/image'
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
        <title>Jesse Jansson</title>
        <meta name="description" content="Bekijk het portfolio van Jesse Jansson via jessejansson.com over (web)developer zijn" />
        <link rel="icon" href="/favicon.ico" />
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
