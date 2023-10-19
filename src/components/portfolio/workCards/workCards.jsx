import React from "react";




const WorkCards = ()=>{
    const workPiсtures= [
        {image:'./../work/baby_blue.jpg'},
        {image:"./../work/dining_green.jpg"},
        {image:"./../work/dining_grey.jpg"},
        {image:"./../work/dining_ligth.jpg"},
        {image:"./../work/baby_blue.jpg"},
        {image:"./../work/holl.jpg"},

    ];
    const workCardsComponents = workPiсtures.map(( picture, index) => {
        return (
          <div key={index} >
            <img src={picture.image} alt='' />
          </div>
        );
      });
      
    return(
        
        <div className="pictureContener">
             <div>{workCardsComponents}

             </div>
        


        </div>
    )
}

export default WorkCards;