import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ListItems } from '../../Component'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { setData, setEdit, setDelete } from '../../Redux/Action'



export const TodoList = ({ text, setText }) => {

  let todotask = useSelector(state => state)
  console.log(todotask, "list")
  const dispatch = useDispatch()

  let clickEditIcon = (val) => {
    setText(val)
    return (dispatch(setEdit()),
      dispatch(setData(val)))
  }


  let clickRemoveTask = (val) => {
    dispatch(setDelete(val))
  }

  return (
    <>
      {todotask.item.map((val) => {
        return (
          <Container >
            <Grid item xs={12}  >
              <ListItems val={val} editList={() => { clickEditIcon(val) }} removeList={() => { clickRemoveTask(val) }} />
            </Grid>
          </Container>
        )
      })}
    </>
  )
}

