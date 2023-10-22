import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';




const PortfolioDetails = (props)=> {
const [state, setState] = useState([])

useEffect(()=>{
    // todo: тут должен задаваться стейт
},[])

    return(
        <Swiper>
             {state.map((value)=><SwiperSlide><img src={value.link} alt="img"/></SwiperSlide>)}   

        </Swiper>
    )
}

