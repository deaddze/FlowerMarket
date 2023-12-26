import React from 'react'
import styles from './Section3.module.sass'
const Section3 = () => {
  return (
    <div className={styles.section3}>
      <h2>Наши преимущества:</h2>
      <div className={styles.section3__blocks}>
        <div className={styles.block1}>
          <h5><b>Большой опыт</b> на рынке</h5>
        </div>
        <div className={styles.block2}>
          <h5><b>Cервис и услуги</b> по нашей продукции</h5>
        </div>
        <div className={styles.block3}>
          <h5><b>Приятные цены</b> и грамотная консультация</h5>
        </div>
        <div className={styles.block4}>
          <h5><b>Качество товара</b> от лучших плантаций мира</h5>
        </div>
      </div>
    </div>
  )
}

export default Section3