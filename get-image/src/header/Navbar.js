import React from 'react'
import {AppBar, Box,InputBase,Toolbar,Typography} from '@mui/material'
import { Collections as CollectionsIcon } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div>
    <AppBar position="static" style={{background:'green'}}>
        <Toolbar>
        <CollectionsIcon />
        <Typography variant="h5" style={{marginLeft: 10}}>GetImage</Typography>
        </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navbar
