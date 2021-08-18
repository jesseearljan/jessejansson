import Head from 'next/head'
import Link from 'next/link'
import React, { useRef } from "react"
import styles from '../assets/styles/Contact.module.scss'

export default function Contact() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Contact - Jesse jansson</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.contactForm}>
        <h1 className={styles.title}>
          Contact
        </h1>
        <form name="contact" method="POST" data-netlify="true">
          <p className={styles.p}>
            <label htmlFor="name">Name</label>
            <input className={styles.input} type="text" name="name" placeholder="Write your name here.."/>
          </p>
          <p className={styles.p}>
            <label htmlFor="email">E-mail</label>
            <input className={styles.input} type="email" name="email" placeholder="Let me know how to contact you back.." />
          </p>
          <p className={styles.p}>
            <label htmlFor="message">Message</label>
            <input className={styles.input} name="message" placeholder="What would you like to tell me.." />
          </p>
          <p className={styles.p}>
            <input className={styles.button} type="submit" value="Submit" />
          </p>
        </form>
        </div>
        <div className={styles.footer}>
            <div className={styles.previous}>
              <Link href="/projects">
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
