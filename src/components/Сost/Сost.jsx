import React, { useState } from "react";
import style from "./Cost.module.css";
import MyButton from "../shared/Button/MyButton";
import Dialog from "../shared/Dialog/Dialog";
import CalculatorForm from "../CalculatorForm/CalculatorForm";

const Cost = () => {
  const [openCalculator, setOpenCalculator] = useState(false);
  // функция для открытия  диалогового окна с калькулятором
  function toggleCalculator() {
    setOpenCalculator((prev) => !prev);
  }

  return (
    <>
      {/* // диалоговое окно с  калькулятором*/}
      <Dialog open={openCalculator} onCancel={toggleCalculator}>
        <CalculatorForm />
      </Dialog>
      {/* Блок "Тариф" на странице сайта */}
      <div className={style.costWork}>
        <h2 className={style.costTitle} id='tarifs'>Тарифы</h2>
        <p>
          Оплата производится в следующем порядке: 50 % перед началом работ и
          обмерами (при заключении договора) и 50 % при сдаче готового дизайн
          проекта. Все этапы по дизайн-проекту входят в данную стоимость.
          Авторский надзор оплачивается отдельно, все консультации в офисе и по
          телефону бесплатно. Расчитать примерную стоимость своего заказа Вы можета
          пройдя по кнопке "Калькулятор вашего проекта". В калькуляторе Вы увидите несколько
           тарифов, стоимость которых зависит от количества метров кв. проекта и полноты проета.
        </p>
        <p>
          Важно! Выполняем проекты по всей России с обмерами от заказчика.
          Пример готового альбома с дизайном проекта отправляем на почту по
          запросу.
        </p>
        <div className={style.calculator}>
          {/* Переиспользованная кнопка проекта в данном контексте вызывает диалоговое окно */}
          <MyButton
            onClick={toggleCalculator}
            className={style.calculatorButton}
          >
            Калькулятор вашего проекта
          </MyButton>
        </div>
      </div>
    </>
  );
};

export default Cost;
