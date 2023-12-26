import React from 'react'

import Logo from '../Logo/Logo'
import Contacts from './ContactsText/ContactsText'
import styles from './Header.module.sass'
const Header = () => {
  return (
    <header className={styles.header}>
      <Logo/>
      <Contacts/>
    </header>
  )
}

export default Header