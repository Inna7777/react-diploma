import React from "react";
import styles from "./Portfolio.module.css";
import WorkCards from "./WorkCards/WorkCards";

// Компонент страницы "Portfolio" содержит фото карточек

const Portfolio = () => {

  
      

    return ( <div className={styles.conteiner}>
        <h2 className={styles.portfolioTitle} id='portfolio'>Портфолио</h2>
       <WorkCards/>      
        </div>)
     }

export default Portfolio;