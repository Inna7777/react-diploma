import React from "react";
import styles from "./Services.module.css";
import Card from './Card/Card'

const Services = () =>{

    const cards = [
        {text:"Дизайн-проект", post:"ТЗ, планировка, визуализации, чертежи, сводные ведомости, эскизные чертежи столярных изделий."},
        {text:"Сервис по авторскому контролю", post:"Выезд на объект 1-2 раза в неделю, выезд на тех. контроль, ответы на вопросы строителей.."},
        {text:"Расчет сметной стоимости проекта", post:"Расчет материалов на  отделку,  мебель, сантехнику, электрикуи т. д. Расчет 2-3 поставщиков, чтобы найти лучшие условия."},
        {text:"Сервис по комплектации", post:"Актуализируем стоимость, готовим счет, организуем    приемку на объекте, договариваемся о лучших  условиях. Подготавливаем 3D чертежи заказных позиций. Контроль ТЗ по изготавлению и комплектации мебели."}
    ]

    const convertCardToView = (card)=><Card text={card.text} post={card.post}/>

    
    
    

    return(
        
        <div className={styles.conteiner}>
            <h2 className={styles.serviceTitle}>Перечень оказываемых услуг</h2>
            <div className={styles.cardsContainer}>
                { cards.map(convertCardToView)}

            </div>
         </div>

    )
}
export default Services;