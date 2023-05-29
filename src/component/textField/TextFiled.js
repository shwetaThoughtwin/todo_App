import React from 'react'
import {TextField} from '@material-ui/core'


const TextFileds = ({placeholder , variant , fullwidth , value, onChange}) => {
  return (
    <TextField placeholder={placeholder} variant={variant} fullWidth={fullwidth} value={value} onChange={onChange} ></TextField>
  )
}

export {TextFileds}