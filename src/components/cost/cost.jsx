import React from "react";
import style from "./cost.module.css"
import MyButton from "../shared/button/myButton";


const Cost =()=>{

     
    return(
        <div className={style.costWork}>
             <h2 className={style.costTitle}>Тарифы</h2> 
             <p>      Оплата производится в следующем порядке: 50 % перед началом работ и обмерами (при заключении договора) и 50 % при сдаче  при сдаче готового дизайн проекта. 
                Все этапы по дизайн-проекту входят в данную стоимость. 
                Авторский надзор оплачивается отдельно, все консультации в офисе и по телефону бесплатно.</p>
                <p>Важно! Выполняем проекты по всей России с обмерами от заказчика. 
                Пример готового альбома с дизайном проекта отправляем на почту по запросу.</p> 
                <div className={style.calculator}>
                <MyButton className={style.calculatorButton}>
                Калькулятор вашего проекта
                </MyButton> 
                </div>

     
        </div>
    )
}

 export default Cost;