import React from "react";
import { Checkbox } from "@mui/material";

const CheckBox = (props) => {
  return (
   <Checkbox label={props.label}  color="secondary" value={props.value} onChange={props.onChange} />
  )
};

export default CheckBox;

