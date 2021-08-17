import { motion } from 'framer-motion'
import React, { useRef } from "react"
import Link from 'next/link'
import { push as Menu } from 'react-burger-menu'
import '../assets/styles/globals.scss'

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
        <ul>
          <li>
            <Link id="home" className="menu-item" href="/">Home</Link>
          </li>
          <li>
            <Link id="about" className="menu-item" href="/about">About</Link>
          </li>
          <li>
            <Link id="projects" className="menu-item" href="/projects">Projects</Link>
          </li>
          <li>
            <Link id="contact" className="menu-item" href="/contact">Contact</Link>
          </li>
        </ul>
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
