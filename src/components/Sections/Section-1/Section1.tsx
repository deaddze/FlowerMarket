import React from 'react'
import Section4 from '../Section4/Section4'
import styles from './Section1.module.sass'
import { Link, animateScroll as scroll } from "react-scroll";
const Section1 = () => {

  return (
    <div className={styles.section1}>
      <div>
        <img src="./icons/logo-section1.svg"></img>
        <h1>westfloraexport</h1>
        <p>Огромный ассортимент цветов и растений</p>
        <Link
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        ><button className={styles.section1__btn1}>Оставить заявку</button></Link>
        <Link
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        ><button className={styles.section1__btn2}>Оставить заявку</button></Link>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        ><img src="./icons/arrow.svg" alt="" className={styles.section1__arrow}/></Link>
      </div>
    </div>
  )
}

export default Section1