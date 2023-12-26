import React from 'react'
import styles from './Logo.module.sass'
const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="./icons/flora-icon.svg" alt="Логотип сайта" />
      <h1>West Flora export</h1>
    </div>
  )
}

export default Logo