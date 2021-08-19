import Head from 'next/head'
import Link from 'next/link'
import React, { useRef } from "react"
import styles from '../assets/styles/Contact.module.scss'

export default function ContactSucces() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Message sent - Jesse jansson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.contactFormSucces}>
          <h1 className={styles.titleSucces}>
            Thankyou!
          </h1>
          <p>Your message has been sent</p>
        </div>
        <div className={styles.footer}>
            <div className={styles.previous}>
              <span className={styles.hiddenChild}>Contact</span>
              <Link href="/contact">
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
              <span className={styles.hiddenChild}>Home</span>
              <Link href="/">
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
