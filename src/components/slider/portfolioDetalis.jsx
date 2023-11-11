import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import style from "./portfolioDetalis.module.css";

const imageArrays = [
  { link: "work/order1/children1.jpg", alt: "Img", groop: "order1" },
  { link: "work/order1/children2.jpg", alt: "Img", groop: "order1" },
  { link: "work/order1/children3.jpg", alt: "Img", groop: "order1" },
  { link: "work/order1/children4.jpg", alt: "Img", groop: "order1" },
  { link: "work/order2/flat1.png", alt: "Img", groop: "order2" },
  { link: "work/order2/flat2.png", alt: "Img", groop: "order2" },
  { link: "work/order2/flat3.jpg", alt: "Img", groop: "order2" },
  { link: "work/order2/flat4.jpg", alt: "Img", groop: "order2" },
  { link: "work/order2/flat5.png", alt: "Img", groop: "order2" },
  { link: "work/order3/flat1.jpg", alt: "Img", groop: "order3" },
  { link: "work/order3/flat2.jpg", alt: "Img", groop: "order3" },
  { link: "work/order3/flat3.jpg", alt: "Img", groop: "order3" },
  { link: "work/order3/flat4.jpg", alt: "Img", groop: "order3" },
  { link: "work/order3/flat5.jpg", alt: "Img", groop: "order3" },
  { link: "work/order3/flat6.jpg", alt: "Img", groop: "order3" },
  { link: "work/order3/flat7.jpg", alt: "Img", groop: "order3" },
  { link: "work/order3/flat8.jpg", alt: "Img", groop: "order3" },
  { link: "work/order3/flat9.jpg", alt: "Img", groop: "order3" },
];

const PortfolioDetalis = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    if (props.id) {
      const selectionArray = imageArrays.filter(
        (item) => item.groop === props.id
      );
      setState(selectionArray);
    }
  }, [props.id]);

<<<<<<< HEAD
  //

  return (
    <div className={style.PortfolioDetalisConteiner}>
       <Swiper navigation modules={[Navigation]} className={style.swiperConteiner}>
      {state.map((value) => (
        <SwiperSlide className={style.pictureWork}>
          <img src={value.link} alt={value.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
   
  );
};

export default PortfolioDetalis;
=======
    return(
        
            
             <Swiper navigation modules={[Navigation]} className={style.swiperConteiner}>
              
             {state.map((value)=><SwiperSlide className={style.pictureWork}>  
                       
                <img src={value.link} alt={value.alt} /> 
                              
                </SwiperSlide>)}   
              
         </Swiper>
        
       
    )
}

export default PortfolioDetalis;
>>>>>>> 535c2c663cef0bf807111788fad571ab06d89cf4
