import React from 'react'

import {useSelector  , useDispatch} from 'react-redux'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import { setData, setEdit , setDelete} from '../../redux/action'

const useStyles = makeStyles({
    li: {
        listStyleType: "none",
        backgroundColor:"#f5f5f5",
        width:"100%",
        padding:"5px"
    },
    icon:
    {
        right:"12px"
    }
   
});


export const TodoList = () => {
    const classes = useStyles();
    let todotask=useSelector(state => state)
    console.log(todotask, "list")
    const dispatch=useDispatch()
    
  
  return (
     <>
     {todotask.item.map((val)=>{
        console.log(val , "sstore")
        return  (
              <>
              <Container >
                <Grid  item xs={12}  >
                <ListItem >
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
                 </ListItem>
                </Grid>
              </Container>
                 
                 
              </>
        )
     }) }
     </>
  )
}

