import  style  from "./workCards.module.css";
import PortfolioDetalis from "../../slider/portfolioDetalis";
import React, { useState } from "react";




const WorkCards = (props)=>{ 
    const[state, setState] = useState(null);

    function idArray(id){
      
      setState(id)
      
    }
    
    const workPiсtures= [
        {image:'/work/baby_blue.jpg', id:"babyBlue"},
        {image:"/work/card_avtor.jpg", id:"cardAvtor"},
        {image:"/work/dining_green.jpg", id: "diningGreen"},
        {image:"/work/dining_grey.jpg",id:"diningGrey"},
        {image:"/work/dining_ligth.jpg", id:"diningLigth"},
        {image:"/work/holl.jpg", id:"holl"}

    ];
    const workCardsComponents = workPiсtures.map((picture) => {
        return (
         
          <div >
              <img src={picture.image} alt='' onClick={()=>idArray(picture.id)} /> 
                          
                 <p>{state}</p>
          </div>
         
        );
      })
      

    return(
        
       
        <div className={style.conteinerPicture}>               
              {workCardsComponents }            
        <PortfolioDetalis id={state} />
        <div>
          <p>{state}</p>
        </div>
               
        </div>
    )
}

export default WorkCards;