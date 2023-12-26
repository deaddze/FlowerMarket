import React from 'react'
import styles from './Contacts.module.sass'
const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div><img src="./icons/pochta.svg" alt="" /></div>
      <div><img src="./icons/whatsapp.svg" alt="" /></div>
      <div><img src="./icons/telegram.svg" alt="" /></div>
    </div>
  )
}

export default Contacts