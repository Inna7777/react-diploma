import React from "react";
import styles from "./portfolio.module.css";
import WorkCards from "./workCards/workCards";



const Portfolio = () => {

  
      

    return ( <div className={styles.conteiner}>
        <h2 className={styles.portfolioTitle}>Портфолио</h2>
       <WorkCards/>      
        </div>)
     }

export default Portfolio;