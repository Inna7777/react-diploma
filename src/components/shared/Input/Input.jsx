import React from "react";
import { TextField } from "@mui/material";


const Input =(props) =>{

    return (
        <TextField  label={props.label} variant="outlined" value={props.value} onChange={props.onChange}/>
    )

   

}

export default Input;