import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'


import { useDispatch, useSelector } from 'react-redux'
import { addData, editItem } from '../../redux/action'
import { Buttons } from '../../component'
import { TextFileds } from '../../component/textField'
import './form.css'

// const useStyles = makeStyles({
//   root: {
//     marginTop: 16,
//     marginBottom: 16,
//     padding: 16,
//     border: "1px solid #adadad",
//     textAlign: "center"
//   },
//   button: {
//     marginTop: 16
//   }
// });

export const Form = () => {
  // const classes = useStyles();
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const edit = useSelector(state => state)
  console.log(edit.edit, "whole state edit")



  const clickMe = () => {
    if (edit.edit) {
      console.log(text, "text")
      dispatch(editItem(text))

    }
    else {
      dispatch(addData(text))
      setText("")
    }
  }

  const change = (e) => {
    return (
      setText(e.target.value)

    )

  }


  return (
    <>

      <Container maxWidth="sm" className='root' >
        <Grid item xs={12} >
          <TextFileds placeholder="enter some title" variant={"outlined"} fullwidth onChange={change} value={text} />
          <Buttons title={edit.edit ? "EDIT" : "ADD"} variant={'contained'} clickHandler={clickMe} color={'primary'}  ></Buttons>
        </Grid>
      </Container>

      {/* <Container maxWidth="sm" className={classes.root}>
        <Grid item xs={12} > */}
      {/* <TextField id="outlined-basic" fullWidth type="text" placeholder="Enter Title"
            multiline variant="outlined" onChange={(e) => {
              return (
                setText(e.target.value)

              )

            }} value={text} /> */}

      {/* <Button variant="contained" color="primary" className={classes.button} onClick={() => {
            if (edit.edit) {
              console.log(text, "text")
              dispatch(editItem(text))

            }
            else {
              dispatch(addData(text))
              setText("")
            }

          }
          }>{edit.edit ? "EDIT" : "ADD"}
          </Button> */}
      {/* 
        </Grid>
      </Container>
       */}



    </>


  )
}
