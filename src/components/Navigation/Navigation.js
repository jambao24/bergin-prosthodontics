import React from "react";
import TabDropdown from "./TabDropdown/TabDropdown";
import "./Navigation.css";
import { ThemeProvider } from '@material-ui/styles';
import Theme from "../../Theme";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";

const Navigation = () => {
  return (
    <ThemeProvider theme={Theme}>
      <AppBar position="static">

        <Toolbar className="Navigation_Toolbar">
          <PhoneIcon className = "Navigation_Phone_Icon" fontSize="small"/>
          <p className="Navigation_Phone_Number">206-866-6466</p>
          <Button variant="contained" color="secondary">Contact Us</Button>
        </Toolbar>

        <div className="Navigation_Tab_Dropdown">
          <TabDropdown></TabDropdown>  
        </div>
        
      </AppBar>
    </ThemeProvider>
  )
}

export default Navigation;