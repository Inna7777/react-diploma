import React, { useState } from "react";
import Input from "../shared/Input/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { useForm } from "react-hook-form";
import styles from "./CalculatorForm.module.css";
import { Controller } from "react-hook-form";
import ReactSelect from "react-select";
import MyButton from "../shared/Button/MyButton";

const options = [
  { value: 1400, label: "VIP тариф (более 100м)" },
  { value: 1600, label: "Стандарт" },
  { value: 500, label: "План" },
];

const getValue = (value) => {
  return value ? options.find((option) => option.value === value) : "";
};

const CalculatorForm = (props) => {
   const [result, setResult] = useState(0);
  const {
    register,
    control,
    formState: {
           errors, //свойство проверки на ошибки
      
    },
    handleSubmit,
    watch,
    reset,
    
  } = useForm({
    mode: "onBlur",
    defaultValues:{
      tarif: 1600,
      squareMetr: null
    }
  });
  const onSubmit = (data) => {
    reset();
  };
  const squareMetr = watch("squareMetr");
  const tarif = watch("tarif");
  
 
    function onCalculate() {
      if (tarif === 1400 && squareMetr < 100) {
        return ; // расчет не производится
      }
      setResult(squareMetr * tarif);
        reset();
    }
    


  return (
    <form className={styles.calculationForm} onSubmit={handleSubmit(onSubmit)}>
      <Controller
          control={control}
          name="tarif"
                            
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <ReactSelect
                placeholder="Taриф"
                options={options}
                value={getValue(value)}
                onChange={(newValue) => onChange(newValue.value)}
                              />
              {error && <div style={{ color: "red" }}>{error?.message}</div>}
            </div>
          )}/>
     
          
          
      <Input
        className={styles.calculationInput}
        label="Метры квадратные"
        sx={{ m: 1, width: "25ch" }}
        type="number"
        placeholder="Введите количество метров"
        InputProps={{
          ...register("squareMetr", {
            required: "Поле обязательно к заполнению", //проверка на заполнение формы
            min: {
              // проверка на введенное кол-во метров
              value: tarif === 1400 ? 100 : 0,
              message: "должно быть не менее 100 м",
            },
          }),
          startAdornment: <InputAdornment position="start">m2</InputAdornment>,
        }}
      />
      <div>
        {errors?.squareMetr && <p>{errors?.squareMetr?.message || "Error!"}</p>}
      </div>
      <div>       
         <div className={styles.calculationResult}> <span >{`${result} рублей `} </span> </div>
        <MyButton
          
          variant="outlined"
          onClick={onCalculate}
         >
          Расчитать
        </MyButton>
        
       
       </div>
      
    </form>
  );
};
export default CalculatorForm;
