import React from 'react'
import styles from './Section2.module.sass'
import { Element } from 'react-scroll'
const Section2 = () => {
  return (
    <Element name="section2">
      <div className={styles.section2}>
      <div className={styles.section2__left}>
        <h2>О компании</h2>
        <p>Наша <b>Оптовая база «WestFloraSpb»</b> надеется стать одним из Лучших Ваших поставщиков свежих цветов оптом. У нас Вы найдете большой ассортимент срезанных цветов, сопутствующих флористических материалов. <br></br>
        <br></br>
        Мы открылись в своем новом формате «WestFloraSpb» в 2023 году , хотя работаем в данной сфере с 1997 г., и за этот период наладили стабильные поставки свежесрезанных сортовых цветов из Голландии, Израиля, Колумбии, Таиланда, Кении, Эквадора, России. <br></br>
        <br></br>
        <b>В числе наших партнеров</b> – Zentoo, ANSU VANDA ,Alexandra Farms, Holstein Flowers, RosaPrima, VannoVa, Agrinag, Decorum Bloemen , AVRORA , Vip Roses , NATUFLORA , MATIZ , MONTANA Lisianthus . GARDAEXPORT. FLORECAL. JARDINES , Special Orchids , Qualily и др.<br></br>
        <br></br>
        Мы <b>сотрудничаем только с проверенными цветочными производителями</b>, растения которых отличаются красотой , свежестью и долговечностью
        Стабильные поставки два раза в неделю.<br></br>
        <br></br>
        Благодаря прямым поставкам обеспечиваем одни из самых низких цен на цветочную продукцию . У нас работают квалифицированные вежливые сотрудники, которые подберут индивидуальный подход к каждому покупателю.</p>
      </div>
      <div className={styles.section2__right}>
        <img src="./img/Flower-Section2.png" alt="" />
        <div></div>
      </div>
    </div>
    </Element>
    
  )
}

export default Section2