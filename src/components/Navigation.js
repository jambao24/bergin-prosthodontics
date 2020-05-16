import React from 'react';
import './Navigation.css';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navigation = () => {
  return (
    <div className="Navigation_Root">
      <AppBar position="static">
        <Toolbar className="Navigation_Toolbar">
          <IconButton
            edge="start"
            className="Navigation_Menu_Button"
            color="inherit"
            aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography className="Navigation_Title" variant="h5" noWrap>
            iloveyoubitch
          </Typography>
          <Button variant="contained">
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation;