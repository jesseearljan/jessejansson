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
        <meta name="description" content="Neem contact op met Jesse." />
        <meta name="author" content="Jesse Jansson" />
        <meta name="keywords" content="Jesse, Jansson, Jesse Jansson, web developer, developer, 21 jaar, Rotterdam, Nederland, Nederlands, Netherlands, Holland, coding, programmeur, programmeren, contact, contact jesse jansson" />
        <meta name="application-name" content="Jesse Jansson" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jessejansson.com/contact" />
        <meta property="og:title" content="Contact - Jesse jansson" />
        <meta property="og:description" content="Neem contact op met Jesse." />
        <meta property="og:image" content="https://res.cloudinary.com/dhi2hmlmj/image/upload/v1629332452/ogpicturecontact.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jessejansson.com/contact" />
        <meta property="twitter:title" content="Contact - Jesse jansson" />
        <meta property="twitter:description" content="Neem contact op met Jesse." />
        <meta property="twitter:image" content="https://res.cloudinary.com/dhi2hmlmj/image/upload/v1629332452/ogpicturecontact.jpg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.contactForm}>
        <h1 className={styles.title}>
          Contact
        </h1>
        <form name="contact" action="/contactSucces" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p className={styles.p}>
            <label htmlFor="name">Name</label>
            <input className={styles.input} type="text" id="name" name="name" placeholder="Write your name here.."/>
          </p>
          <p className={styles.p}>
            <label htmlFor="email">E-mail</label>
            <input className={styles.input} type="email" id="email" name="email" placeholder="Let me know how to contact you back.." />
          </p>
          <p className={styles.p}>
            <label htmlFor="message">Message</label>
            <textarea className={styles.input} id="message" name="message" placeholder="What would you like to tell me.." />
          </p>
          <p className={styles.p}>
            <button className={styles.button} type="submit">Send</button>
          </p>
        </form>
        </div>
        <div className={styles.footer}>
            <div className={styles.previous}>
              <span className={styles.hiddenChild}>Projects</span>
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
