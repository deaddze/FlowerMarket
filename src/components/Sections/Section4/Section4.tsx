import React from 'react'
import Contacts from '../../Contacts/Contacts'
import styles from './Section4.module.sass'
import { Element } from 'react-scroll'
const Section4 = () => {
  return (
    <Element name="section4">
      <div className={styles.section4}>
      <h2>Оставить заявку:</h2>
      <p>Наша компания предлагает вам оставить заявку на получения прайса, ознакомиться с ценами и сделать заказ на те позиции,который вам необходимы. Так же получить консультацию и сопровождение по оформлению заказа.</p>
      <div className={styles.section4__block}>
        <div className={styles.section4__left}>
          <h4>Обратная связь</h4>
          <p>Заполните форму обратной связи, наши менеджер свяжется в ближайшее время</p>
          <h4>Контакты</h4>
          <p>Email: mail@indox.ru</p>
          <p>Телефон: +7 (999) 999-99-99</p>
          <Contacts/>
        </div>
        <div className={styles.section4__right}>
          <div>
            <img src="./icons/user-input.svg" alt=""/>
            <input type="name" name="" id="" placeholder='ФИО*'/>
          </div>
          <div>
            <img src="./icons/tel-input.svg" alt="" style={{left: "7px", top: "2px"}}/>
            <input type="tel" name="" id="" placeholder='Телефон*'/>
          </div>
          <div>
            <img src="./icons/pochta-input.svg" alt="" />
          <input type="email" name="" id="" placeholder='E-mail*'/>
          </div>
          <div>
            <img src="./icons/message-input.svg" alt="" />
            <textarea name="Сообщение" placeholder='Сообщение'/>
          </div>
          <button>Отправить</button>
        </div>
      </div>
     </div>
    </Element>
  )
}

export default Section4