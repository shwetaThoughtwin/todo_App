import React from 'react'
import {Button} from '@material-ui/core'


export const Buttons = ({title,clickHandler,variant,color}) => {
  return (
    <Button onClick={clickHandler} variant={variant} color={color} >{title}</Button>
  )
}
