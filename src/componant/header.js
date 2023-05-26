import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles({
    heading: {
        margin: "auto",
        fontSize:"20px"
    }
});

export default function Header() {
    const classes= useStyles()
  return (
    // <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
       
          <Typography class={classes.heading}  variant="h1" component="div" sx={{ flexGrow: 1 }}>
            TODO APP
          </Typography>
          
        </Toolbar>
      </AppBar>
    // </Box>
  );
}