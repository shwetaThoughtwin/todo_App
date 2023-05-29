
import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import './list.css'

export const ListItems = ({val, clickHandler , remove}) => {
  return (
    <ListItem >
    <ListItemIcon className='li'>
         <CheckCircleIcon color="primary"></CheckCircleIcon>
         <li>{val}</li>
         <ListItemSecondaryAction>
         <CreateIcon className="icon" onClick={clickHandler}> </CreateIcon>
         <DeleteIcon onClick={remove}> </DeleteIcon>
         </ListItemSecondaryAction>
    </ListItemIcon>
  </ListItem>
  )
}
