import React from "react";
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';


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
        <Button color="inherit">Compare</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
