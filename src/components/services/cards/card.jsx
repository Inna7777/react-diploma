import React  from "react";
import c from "./card.module.css";

const Card = (props) =>{
    return (
        <div className={c.card}>
        <h3>{props.text}</h3>
        <p>{props.post}</p>
    </div>
    )

}

export default Card;