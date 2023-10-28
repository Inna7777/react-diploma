import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';






const PortfolioDetalis = (props)=> {
const [state, setState] = useState([])


useEffect(()=>{
     
    setState(selectionArray);
  }, [props.id]);



const imageArrays = [
   
      {link: 'work/blue/children2.jpg', alt:'Image 2', groop:"babyBlue" },
      {link: 'work/blue/children1.jpg', alt:'Image 1', groop:"babyBlue" },
      {link: 'work/dining/kichen1.png', alt:'Image 1', groop: "diningGrey"},
      {link: 'work/dining/kichen2.png', alt:'Image 2', groop:"diningGrey"},
    ]
  
  
   const selectionArray = imageArrays.filter((item) => item.groop === props.id );




    return(
        
            
             <Swiper>
         
             {state.map((value)=><SwiperSlide>  
                       
                <img src={value.link} alt={value.alt}/>
                </SwiperSlide>)}   
             
         </Swiper>
        
       
    )
}

export default PortfolioDetalis;