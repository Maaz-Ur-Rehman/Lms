import { InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

export const SMSelect = (props) => {

    const{label,value,onChange,datasource,required}=props

    return (
        <>
         <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        required={required}
        fullWidth={true}
        variant="standard"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        onChange={onChange}
        value={value}
      >
       {datasource && datasource.length>0 ?
       datasource.map((x)=>
        <MenuItem value={x.id} >{x.fullName}</MenuItem>
       ):null} 
      </Select>
        </>
    )
    
}
