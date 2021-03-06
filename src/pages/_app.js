import { motion } from 'framer-motion'
import React, { useRef } from "react"
import Link from 'next/link'
import { push as Menu } from 'react-burger-menu'
import styles from '../assets/styles/globals.scss'

function MyApp({ Component, pageProps, router }) {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
  <div style={{
    backgroundColor: "#000000",
    backgroundImage: "linear-gradient(147deg, #000000 0%, #434343 74%)",
  }}>
  <motion.div key={router.route} initial="pageIntitial" animate="pageAnimate" variants={{
    pageIntitial: {
      opacity: 0
    },
    pageAnimate: {
      opacity: 1,
    },
  }}>
    <div id="outer-container">
      <Menu right customBurgerIcon={ <lottie-player
            ref={ref}
            autoplay
            loop
            mode="Bounce"
            src="https://assets3.lottiefiles.com/packages/lf20_dx5qgwsu.json"
          />
          } 
          pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } width={ 175 } burgerButtonClassName={ "burgerMenu" }>
          <li className={`navItem ${router.pathname == "/" ? "active" : ""}`}>
            <Link id="home" href="/">Home</Link>
          </li>
          <li className={router.pathname == "/about" ? "active" : ""}>
            <Link id="about" href="/about">About</Link>
          </li>
          <li className={router.pathname == "/projects" ? "active" : ""}>
            <Link id="projects" href="/projects">Projects</Link>
          </li>
          <li className={router.pathname == "/contact" ? "active" : ""}>
            <Link id="contact" href="/contact">Contact</Link>
          </li>
      </Menu>
      <main id="page-wrap">
        <Component {...pageProps} />
      </main>
    </div>
  </motion.div>
  </div>
  )
}

export default MyApp
