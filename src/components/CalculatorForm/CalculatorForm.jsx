import React, { useState } from "react";
import Input from "../shared/Input/Input";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import SelectField from "../shared/Select/Select";

const orderForms = [
  { label: "VIP тариф (более 100м)", value: "s1" },
  { label: "Стандарт", value: "s2" },
  { label: "План", value: "s3" },
];

const CalculatorForm = (props) => {
  const [squareMetr, setSquareMetr] = useState(null);
  const [tarif, setTarif] = useState(null);

  function onSquareMetrChange(event) {
    setSquareMetr(event.target.value);
  }
  function onTarifChange(event) {
    setTarif(event.target.value);
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
        InputProps={{
          startAdornment: <InputAdornment position="start">m2</InputAdornment>,
        }}
        onChange={onSquareMetrChange}
        value={squareMetr}
      />
      <div>
        <SelectField
          options={orderForms}
          label="Тариф"
          placeholder="Выберите тариф"
          value={tarif}
          onChange={onTarifChange}
        />
      </div>
    </form>
  );
};
export default CalculatorForm;
