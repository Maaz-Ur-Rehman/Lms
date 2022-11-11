import { TextField } from '@mui/material'
import React from 'react'

export const SMInput = (props) => {
    const{label,disabled,value,onChange,datasource,required,displayfield,type,valuefield,nodename}=props

  
    return (
        <>
            <TextField variant='standard' disabled={disabled} label={label} onChange={onChange} value={value} type={type} ></TextField>
        </>
  )
}
