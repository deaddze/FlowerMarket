import React from 'react'
import styles from './NavLink.module.sass'
const NavLink = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li><a href="#">Главная</a></li>
        <li><a href="#">О нас</a></li>
        <li><a href="#">Сотрудничество</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </nav>
  )
}

export default NavLink