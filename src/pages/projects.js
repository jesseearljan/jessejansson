import Head from 'next/head'
import Link from 'next/link'
import React, { useRef } from "react"
import styles from '../assets/styles/Projects.module.scss'

export default function Projects() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Projects - Jesse jansson</title>
        <meta name="description" content="Alle projecten waar Jesse aan gewerkt heeft." />
        <meta name="author" content="Jesse Jansson" />
        <meta name="keywords" content="Jesse, Jansson, Jesse Jansson, web developer, developer, 22 jaar, Rotterdam, Nederland, Nederlands, Netherlands, Holland, coding, programmeur, programmeren, projecten, projects, jesse jansson zijn projecten" />
        <meta name="application-name" content="Jesse Jansson" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jessejansson.com/projects" />
        <meta property="og:title" content="Projects - Jesse jansson" />
        <meta property="og:description" content="Alle projecten waar Jesse aan gewerkt heeft." />
        <meta property="og:image" content="https://res.cloudinary.com/dhi2hmlmj/image/upload/v1629332452/ogpictureprojects.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jessejansson.com/projects" />
        <meta property="twitter:title" content="Projects - Jesse jansson" />
        <meta property="twitter:description" content="Alle projecten waar Jesse aan gewerkt heeft." />
        <meta property="twitter:image" content="https://res.cloudinary.com/dhi2hmlmj/image/upload/v1629332452/ogpictureprojects.jpg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Take a look at all my projects
        </h1>
        <div className={styles.grid}>
          <a 
            rel="noreferrer"
            target="_blank"
            href="https://jessejansson.com/" 
            className={styles.card}>
            <h2>JesseJansson.com &rarr;</h2>
            <p>Find in-depth information about Jessejansson.</p>
          </a>

          <a 
            rel="noreferrer"
            target="_blank"
            href="https://jessejansson.com/" 
            className={styles.card}>
            <h2>CocoCurlsRoom.nl &rarr;</h2>
            <p>CocoCurlsRoom, in maintenance.</p>
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://janssonscooters.nl/"
            className={styles.card}
          >
            <h2>JanssonScooters.nl &rarr;</h2>
            <p>I like repairing mopeds too, this is my moped repair site.</p>
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://jessejansson.com/contact"
            className={styles.card}
          >
            <h2>More coming... &rarr;</h2>
            <p>Maybe your next website will be in this section.</p>
          </a>
        </div>
        <div className={styles.footer}>
            <div className={styles.previous}>
            <span className={styles.hiddenChild}>About</span>
              <Link href="/about">
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
            <span className={styles.hiddenChild}>Contact</span>
              <Link href="/contact">
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
