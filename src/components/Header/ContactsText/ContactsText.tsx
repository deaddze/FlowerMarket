import React from 'react'
import styles from './Contacts.module.sass'
const ContactsText = () => {
  return (
    <div className={styles.contacts}>
      <h3>Email: mail@indox.ru</h3>
      <h3>Позвоните нам:  +7 (999) 999-99-99</h3>
    </div>
  )
}

export default ContactsText