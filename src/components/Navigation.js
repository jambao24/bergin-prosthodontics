import React from "react";
import "./Navigation.css";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";

const Navigation = () => {
  return (
    <div className="Navigation_Root">
      <AppBar position="static">
        <Toolbar className="Navigation_Toolbar">
          <Typography className="Navigation_Title" variant="h5" noWrap>
            iloveyoubitch
          </Typography>
          <PhoneIcon className = "Navigation_Phone_Icon" fontSize="small"/>
          <div className="Navigation_Phone_Number">
            <Typography variant="h7" noWrap>
              206-866-6466
            </Typography>
          </div>
          <Button variant="contained">
            Contact Us
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation;