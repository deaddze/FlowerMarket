import React from 'react'
import Contacts from '../Contacts/Contacts'
import ContactsText from '../Header/ContactsText/ContactsText'
import Line from '../Line/Line'
import Logo from '../Logo/Logo'
import styles from './Footer.module.sass'
const Footer = () => {
  return (
    <>
    <Line/>
    <div className={styles.footer}>
      <Logo/>
      <div className={styles.contacts}>
        <div>
          <h3>Email: mail@indox.ru</h3>
          <h3>Позвоните нам:  +7 (999) 999-99-99</h3>
        </div>
        <Contacts/>
      </div>
    </div>
    </>
  )
}

export default Footer