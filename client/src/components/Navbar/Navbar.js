import React from "react";
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';


const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
           
          </IconButton>
          <Typography variant="h6" color="inherit">
            CodeVisualForces
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
