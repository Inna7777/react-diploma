import React  from "react";
import styles from "./Card.module.css";

const Card = (props) =>{
    return (
        <div className={styles.card}>
        <h3 className={styles.cardText}>{props.text}</h3>
        <p className={styles.cardPost}>{props.post}</p>
    </div>
    )

}

export default Card;