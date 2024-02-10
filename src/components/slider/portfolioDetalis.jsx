import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import style from "./PortfolioDetalis.module.css";
// Массив картинок для отображения в слайдеpе
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

// Переменной PortfolioDetalis передаем отфильтрованный массив

const PortfolioDetalis = (props) => {
  const [state, setState] = useState([]);

  // Функции передаем id карточки по которой кликнули и фильтруем 
  // массив фото. id карточки и 'groop' массива должны быть равны
  useEffect(() => {
    if (props.id) {
      const selectionArray = imageArrays.filter(
        (item) => item.groop === props.id
      );
      setState(selectionArray);
    }
  }, [props.id]);

/* Мепим отфильтрованный массив */
 //Используем слайдер из библиотеке  swiper/react
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
