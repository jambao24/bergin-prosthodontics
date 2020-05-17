import React from "react";
import TabDropdown from "./TabDropdown/TabDropdown";
import "./Navigation.css";
import Theme from "../../Theme";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import { ThemeProvider } from '@material-ui/styles';

const Navigation = () => {
  return (
    <ThemeProvider theme={Theme}>
      <AppBar position="static">
        <Toolbar className="Navigation_Toolbar">
          <PhoneIcon className = "Navigation_Phone_Icon" fontSize="small"/>
          <p className="Navigation_Phone_Number">206-866-6466</p>
          <Button variant="contained" color="secondary">Contact Us</Button>
        </Toolbar>
        <Typography className="Navigation_Title" variant="h5" noWrap>
          <TabDropdown></TabDropdown>
        </Typography>
      </AppBar>
    </ThemeProvider>
  )
}

export default Navigation;