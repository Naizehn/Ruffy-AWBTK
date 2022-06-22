import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Card from "https://framer.com/m/Card-iPdo.js@37YFzL8XUqh0keSjaYYh"
import Social from "https://framer.com/m/Social-R2dh.js@VaPlyOAThGWMB2SoLoEY"


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Card
          // Using default values:
          aboutMe={`I’m a designer from Amsterdam, The Netherlands. Early 2017 I joined Framer to help build the next‑generation interactive design tool. At Framer I help shape the brand and build Framer.com.`}
          icon1={undefined}
          icon2={undefined}
          icon3={undefined}
          icon4={undefined}
          image={undefined}
          name='Jurre Houtkamp'
          subtitle='Designer at Framer'
          
        />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home