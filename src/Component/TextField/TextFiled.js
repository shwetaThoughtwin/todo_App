import React from 'react'
import { TextField } from '@material-ui/core'


export const TextFileds = ({ placeholder, variant, fullwidth, value, changeHandler }) => {
  return (
    <TextField placeholder={placeholder} variant={variant} fullWidth={fullwidth} value={value} onChange={changeHandler} />
  )
}