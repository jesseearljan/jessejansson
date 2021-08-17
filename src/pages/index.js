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
          backgroundColor: "#FFF",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          zIndex: 5,
          position: "absolute",
        }}> 
          <lottie-player
            ref={ref}
            autoplay
            keepLastFrame
            src="https://assets7.lottiefiles.com/private_files/lf30_b8ldmnne.json"
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
