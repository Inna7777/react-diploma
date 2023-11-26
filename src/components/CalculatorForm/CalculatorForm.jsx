import React, { useState } from "react";
import Input from "../shared/Input/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/MenuItem";
import SelectField from "../shared/Select/Select";
import { useForm } from "react-hook-form";

const orderForms = [
  { label: "VIP тариф (более 100м)", value: 1400 },
  { label: "Стандарт", value: 1600 },
  { label: "План", value: 500 },
];

const CalculatorForm = (props) => {
  const [tarif, setTarif] = useState(null);
  const [result, setResult] = useState(null);
  const {
    register,
    formState: { //объект у которого есть различные свойства
      errors, //свойство проверки на ошибки
      isValid 
  },
  watch,
    trigger,
    getValues,
  } = useForm({
    mode:"onChange"
  })

  const squareMetr = watch("squareMetr")
  function onTarifChange(event) {
    trigger("squareMetr")
    setTarif(event.target.value);
  }

  function onCalculate() {
   setResult( squareMetr * tarif)
   console.log (squareMetr, tarif, (getValues()) )

  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={{ display: "flex", flexDirection: "column", gap: "15px" }}
    >
      <Input 
        label="Метры квадратные"
        sx={{ m: 1, width: "25ch" }}
        type="number"
        placeholder="Введите количество метров"
        InputProps={{ ...register("squareMetr",{
          required: "Поле обязательно к заполнению", //проверка на заполнение формы
          min: { // проверка на заполнение ко-во введенных символов
              value: tarif === 1400? 100:0,
              message: 'должно быть не менее 100 м'
          }
      }),
          startAdornment: <InputAdornment position="start">m2</InputAdornment>,
        }}
       
      />
      <div>{errors?.squareMetr && <p>{errors?.squareMetr?.message || "Error!"}</p>}</div>
      <div>
        <SelectField
          options={orderForms}
          label="Тариф"
          placeholder="Выберите тариф"
          value={tarif}
          onChange={onTarifChange}
          InputProps={{ ...register("tarif",{
            required: "Поле обязательно к заполнению", //проверка на заполнение формы
           
        })}}
        />
          <div>{errors?.tarif && <p>{errors?.tarif?.message || "Error!"}</p>}</div>
      <Button variant="outlined" onClick={onCalculate} >Расчитать</Button>
      <span>{result}</span>

      </div>
    </form>
  );
};
export default CalculatorForm;
