import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'


import { useDispatch, useSelector } from 'react-redux'
import { addData, editItem } from '../../Redux/Action'
import { Buttons } from '../../Component'
import { TextFileds } from '../../Component'
import './form.css'



export const Form = ({ text, setText }) => {

  const dispatch = useDispatch();
  const edit = useSelector(state => state)

  const buttonClick = () => {
    if (edit.edit) {
      dispatch(editItem(text))
      setText("")

    }
    else {
      dispatch(addData(text))
      setText("")
    }
  }

  const textChange = (e) => {
    return (
      setText(e.target.value)
    )
  }


  return (
    <Container maxWidth="sm" className='root' >
      <Grid item xs={12} >
        <TextFileds placeholder="enter some title" variant={"outlined"} fullwidth changeHandler={textChange} value={text} />
        <Buttons title={edit.edit ? "EDIT" : "ADD"} variant={'contained'} clickHandler={buttonClick} color={'primary'} />
      </Grid>
    </Container>
  )
}
