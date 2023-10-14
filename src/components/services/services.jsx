import React from "react";
import s from "./services.module.css";
import Card from './cards/card'

const Services = (props) =>{
    return(
        
        <div className={s.conteiner}>
            <h2>{props.servisStr}</h2>
            <Card tytle="Дизайн-проект" post="ТЗ, планировка, визуализации, чертежи, сводные
            ведомости, эскизные чертежи столярных изделий." />
            </div>

    )
}
export default Services;