import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";

const SelectField = (props) => (
  <FormControl fullWidth>
    <InputLabel id="select">{props.label}</InputLabel>
    <Select
      id="select"
      value={props.value}
      onChange={props.onChange}
      label={props.label}
      placeholder={props.placeholder}
      style={{ width: "100%" }}
    >
      {props.options.map((el) => (
        <MenuItem value={el.value}>{el.label}</MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SelectField;
