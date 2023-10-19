import React from "react";
import styles from "./cost.module.css"


const Cost =()=>{

     
    return(
        <div className={styles.costWork}>
             <h2 className={styles.costTitle}>Стоимость</h2> 
             <p>      Оплата производится в следующем порядке: 50 % перед началом работ и обмерами (при заключении договора) и 50 % при сдаче  при сдаче готового дизайн проекта. 
                Все этапы по дизайн-проекту входят в данную стоимость. 
                Авторский надзор оплачивается отдельно, все консультации в офисе и по телефону бесплатно.</p>
                <p>Важно! Выполняем проекты по всей России с обмерами от заказчика. 
                Пример готового альбома с дизайном проекта отправляем на почту по запросу.</p> 
                <div className={styles.calculator}>
                <a href="a" className={styles.calculatorButton}>
                Калькулятор вашего проекта
                </a> 
                </div>

     
        </div>
    )
}

 export default Cost;