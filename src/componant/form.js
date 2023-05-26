import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import {addData , editItem} from '../action/action'
import {useDispatch , useSelector } from 'react-redux'


const useStyles = makeStyles({
    root: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        border:"1px solid #adadad",
        textAlign:"center"
    },
    button: {
        marginTop: 16
    }
});

export const Form = () => {
    const classes = useStyles();
    const [text,setText] = useState("");
    const dispatch=useDispatch();
    const edit =useSelector(state=>state)
    console.log(edit.edit ,"whole state edit")
  return (
   <>
    <Container maxWidth="sm" className={classes.root}>
        <Grid item xs={12} > 
             <TextField id="outlined-basic" fullWidth type="text" placeholder="Enter Title" 
                multiline variant="outlined"   onChange={(e)=>{
                   return(
                    setText(e.target.value)
                    
                   ) 
                                                                
                }} value={text}/> 
            
                <Button variant="contained"  color="primary" className={classes.button} onClick={()=>{
                     if(edit.edit)
                        {
                            console.log(text,"text")
                            dispatch(editItem(text))
                            
                         }
                      else{
                        dispatch(addData(text))  
                        setText("")
                      }     
                   
                    }
                    }>{edit.edit ? "EDIT" : "ADD" }
                                                   </Button>

        </Grid>
    </Container>
   </>


  )
}
