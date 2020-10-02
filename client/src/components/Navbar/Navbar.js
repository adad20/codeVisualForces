import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense" className="navBar">
          <div className="logoName">
            {/* icon not visible ,so commented out  */}
            {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton> */}
            <Typography variant="h6" color="inherit">
              CodeVisualForces
            </Typography>
          </div>
          <Button color="inherit" className="compareBtn">
            Compare
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
