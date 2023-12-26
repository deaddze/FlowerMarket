import React from 'react'
import Footer from '../Footer/Footer'
import Section1 from '../Sections/Section-1/Section1'
import Section2 from '../Sections/Section-2/Section2'
import Section3 from '../Sections/Section3/Section3'
import Section4 from '../Sections/Section4/Section4'
import Section5 from '../Sections/Section5/Section5'
import styles from './Main.module.sass'
const Main = () => {
  return (
    <div className={styles.main}>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  )
}

export default Main