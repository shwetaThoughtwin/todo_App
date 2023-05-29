import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ListItems } from '../../component/listItem'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { setData, setEdit, setDelete } from '../../redux/action'

// import { makeStyles } from '@material-ui/core/styles';
// import { click } from '@testing-library/user-event/dist/click';
// const useStyles = makeStyles({
//     li: {
//         listStyleType: "none",
//         backgroundColor:"#f5f5f5",
//         width:"100%",
//         padding:"5px"
//     },
//     icon:
//     {
//         right:"12px"
//     }

// });


export const TodoList = () => {
  // const classes = useStyles();
  let todotask = useSelector(state => state)
  console.log(todotask, "list")
  const dispatch = useDispatch()

  let click = (val) => {

    return (dispatch(setEdit()),
      dispatch(setData(val))
    )
  }


  let removeTask = (val) => {
    return (
      dispatch(setDelete(val))
    )
  }

  return (
    <>
      {todotask.item.map((val) => {
        console.log(val, "sstore")
        return (
          <>
            <Container >
              <Grid item xs={12}  >
                <ListItems val={val} clickHandler={() => { return click(val) }} remove={() => { return removeTask(val) }}  ></ListItems>
              </Grid>
            </Container>

            {/* <ListItem >
                   <ListItemIcon className={classes.li}>
                        <CheckCircleIcon color="primary"></CheckCircleIcon>
                        <li>{val}</li>
                        <ListItemSecondaryAction>
                        <CreateIcon className={classes.icon} onClick={()=> {
                         return (dispatch(setEdit()) ,
                                dispatch(setData(val))
                                
                            )
                        }
                          }> </CreateIcon>
                        <DeleteIcon onClick={()=>{
                          return (
                                   dispatch(setDelete(val))
                          )
                        }}> </DeleteIcon>
                        </ListItemSecondaryAction>
                   </ListItemIcon>
                 </ListItem> */}
            {/* </Grid>
              </Container> */}


          </>
        )
      })}
    </>
  )
}

