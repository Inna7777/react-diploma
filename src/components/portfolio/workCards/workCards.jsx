import React, { useState } from "react";




const WorkCards = (props)=>{ 
    const[state, setState] = useState("Hello");
    
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
            <img src={picture.image} alt='' />
          </div>
        );
      })
      
const onClick = ()=>{
  console.log('asd');
  setState((prev)=>{
    return prev === "Hello" ? "Goodbye": "Hello"
  })
}

    return(
        
        <div className="pictureContener">
             <div>
              {/* {workCardsComponents} */}

             </div>
        
          <div style={{display:"flex", flexDirection:"column"}}>
            {state}
            <button onClick={onClick}>test</button>
          </div>

        </div>
    )
}

export default WorkCards;