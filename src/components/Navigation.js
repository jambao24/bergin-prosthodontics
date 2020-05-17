import React from "react";
import TabDropdown from "./TabDropdown";
import "./Navigation.css";
import Theme from "../Theme";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import { ThemeProvider } from '@material-ui/styles';

const Navigation = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div className="Navigation_Root">
        <AppBar position="static" className="Navigation_Appbar">
          <Toolbar className="Navigation_Toolbar">
            <PhoneIcon className = "Navigation_Phone_Icon" fontSize="small"/>
            <div className="Navigation_Phone_Number">
              <Typography variant="h7" noWrap>
                206-866-6466
              </Typography>
            </div>
            <Button variant="contained" color="secondary">
              Contact Us
            </Button>
          </Toolbar>
          <Typography className="Navigation_Title" variant="h5" noWrap>
            <TabDropdown></TabDropdown>
          </Typography>
        </AppBar>
      </div>
    </ThemeProvider>
  )
}

export default Navigation;