import React from "react";
import { TextField } from "@mui/material";

// создание образа Input - из библиотеки material ui 
const Input = (props) => {
  return (
      <TextField
        label={props.label}
        variant="outlined"
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        InputProps={props.InputProps}
      />
  );
};

export default Input;
