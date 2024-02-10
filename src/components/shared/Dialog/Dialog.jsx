import React from "react";
import style from "./Dialog.module.css";
//диалоговое окно для использования в проекте (в Slider и CalculatorForm)
const Dialog = (props) => {
  return (
    props.open && (
      <div className={style.dialogContainer}>
        <div className={style.dialogContent}>
          <div className={style.cancel}>
            <span onClick={props.onCancel}>X</span>
          </div>
          {props.children}
        </div>
      </div>
    )
  );
};

export default Dialog;
